//+------------------------------------------------------------------+
//|                              Auto_SR_Lines_v13_10_MA_Filter.mq5  |
//|                               Copyright 2026, IT Consultant & AI |
//+------------------------------------------------------------------+
#property copyright "IT Consultant & AI"
#property version   "13.10"
#property indicator_chart_window
#property indicator_plots 0
//--- 入力パラメータ
input int      InpSensitivity    = 6;               // 山/谷の判定感度
input color    InpResColor       = clrChartreuse;    // 抵抗帯（山）の色：黄緑
input color    InpSupColor       = clrDeepPink;      // 支持帯（谷）の色：ピンク
input bool     InpFill           = true;             // ゾーンの塗りつぶし
input color    InpOrangeColor    = clrOrange;        // 反転ゾーンの色（統一）
input double   InpZoneMaxPips    = 5.0;              // オレンジゾーンの最大幅(pips)
// ※ 現在価格に最も近い1本のみ描画（上下各1本）
input int      InpMaPeriod        = 20;              // MA期間
input ENUM_MA_METHOD InpMaMethod  = MODE_SMA;        // MA種別
//--- MA ハンドル
int g_maHandle = INVALID_HANDLE;
//--- H1足確定判定用
datetime g_lastH1BarTime = 0;
//+------------------------------------------------------------------+
//| 初期化                                                            |
//+------------------------------------------------------------------+
int OnInit()
{
   ObjectsDeleteAll(0, "AutoRes_Zone");
   ObjectsDeleteAll(0, "AutoSup_Zone");
   ObjectsDeleteAll(0, "Orange_");
   g_lastH1BarTime = 0;
   // H1用のMAハンドルを作成（H1以外のチャートでもH1のMAを参照）
   g_maHandle = iMA(_Symbol, PERIOD_H1, InpMaPeriod, 0, InpMaMethod, PRICE_CLOSE);
   if(g_maHandle == INVALID_HANDLE)
   {
      Print("MA indicator creation failed: ", GetLastError());
      return(INIT_FAILED);
   }
   return(INIT_SUCCEEDED);
}
//+------------------------------------------------------------------+
//| 終了時                                                            |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   ObjectsDeleteAll(0, "AutoRes_Zone");
   ObjectsDeleteAll(0, "AutoSup_Zone");
   ObjectsDeleteAll(0, "Orange_");
   if(g_maHandle != INVALID_HANDLE)
      IndicatorRelease(g_maHandle);
}
//+------------------------------------------------------------------+
//| メイン計算                                                        |
//+------------------------------------------------------------------+
int OnCalculate(const int rates_total, const int prev_calculated,
                const datetime &time[], const double &open[],
                const double &high[], const double &low[],
                const double &close[], const long &tick_volume[],
                const long &volume[], const int &spread[])
{
   if(rates_total < InpSensitivity * 2 + 1) return(0);
   ArraySetAsSeries(time, true);
   ArraySetAsSeries(high, true);
   ArraySetAsSeries(low, true);
   ArraySetAsSeries(open, true);
   ArraySetAsSeries(close, true);
   // H1以外ではオレンジゾーンを消去（サポレジゾーンは残す）
   if(_Period != PERIOD_H1)
   {
      ObjectsDeleteAll(0, "Orange_");
   }
   // ── サポレジ帯の判定（全時間軸共通） ──
   bool foundRes = false, foundSup = false;
   for(int i = InpSensitivity; i < rates_total - InpSensitivity; i++)
   {
      if(foundRes && foundSup) break;
      if(!foundRes)
      {
         bool isP = true;
         for(int k = 1; k <= InpSensitivity; k++)
         {
            if(high[i - k] > high[i] || high[i + k] > high[i]) { isP = false; break; }
         }
         if(isP)
         {
            CreateZone("AutoRes_Zone", time[i], high[i], MathMax(open[i], close[i]), InpResColor);
            foundRes = true;
         }
      }
      if(!foundSup)
      {
         bool isT = true;
         for(int k = 1; k <= InpSensitivity; k++)
         {
            if(low[i - k] < low[i] || low[i + k] < low[i]) { isT = false; break; }
         }
         if(isT)
         {
            CreateZone("AutoSup_Zone", time[i], low[i], MathMin(open[i], close[i]), InpSupColor);
            foundSup = true;
         }
      }
   }
   // ── オレンジゾーン判定（H1のみ・H1足確定時のみ再計算） ──
   if(_Period == PERIOD_H1)
   {
      datetime currentH1BarTime = time[0];

      // ★ 新しいH1足が出現した時だけ再計算（足の中ではゾーン固定）
      if(g_lastH1BarTime != currentH1BarTime)
      {
         g_lastH1BarTime = currentH1BarTime;

         // 既存のオレンジゾーンを一旦消去して再描画
         ObjectsDeleteAll(0, "Orange_");
         // H1のMA値を取得
         double maBuffer[];
         ArraySetAsSeries(maBuffer, true);
         int copied = CopyBuffer(g_maHandle, 0, 0, 1, maBuffer);
         if(copied < 1) { ChartRedraw(); return(rates_total); }
         double maValue = maBuffer[0];
         double current_price = close[0];

         // pipsをprice幅に変換（USD/JPYなど3桁: _Point=0.001, 1pip=0.01）
         double maxZoneWidth = InpZoneMaxPips * _Point * 10;

         // MA判定: 現在価格がMAより上 → 押し目買いのみ / MAより下 → 戻り売りのみ
         bool showSellZones = (current_price < maValue);
         bool showBuyZones  = (current_price > maValue);
         // 候補を収集し、現在価格に最も近い1本だけを描画
         double bestSellHigh = 0, bestSellLow = 0, bestSellDist = DBL_MAX;
         datetime bestSellTime = 0;
         double bestBuyHigh = 0, bestBuyLow = 0, bestBuyDist = DBL_MAX;
         datetime bestBuyTime = 0;
         for(int i = 1; i < MathMin(rates_total - 1, 200); i++)
         {
            // 【戻り売り候補】陽線(i+1) → 陰線(i) = 反発下落ポイント
            if(showSellZones)
            {
               if(close[i + 1] > open[i + 1] && close[i] < open[i])
               {
                  double body_top  = MathMax(open[i + 1], close[i + 1]);
                  double wick_tip  = high[i + 1];
                  // ヒゲがない場合はスキップ
                  if(wick_tip - body_top < _Point) continue;
                  // ★ ヒゲ先端から最大N pips分だけ帯にする（実体にかぶらない）
                  double zone_high = wick_tip;
                  double zone_low  = MathMax(body_top, wick_tip - maxZoneWidth);
                  if(zone_high > current_price)
                  {
                     double dist = zone_low - current_price;
                     if(dist < bestSellDist)
                     {
                        bestSellDist = dist;
                        bestSellHigh = zone_high;
                        bestSellLow  = zone_low;
                        bestSellTime = time[i + 1];
                     }
                  }
               }
            }
            // 【押し目買い候補】陰線(i+1) → 陽線(i) = 反発上昇ポイント
            if(showBuyZones)
            {
               if(close[i + 1] < open[i + 1] && close[i] > open[i])
               {
                  double body_bottom = MathMin(open[i + 1], close[i + 1]);
                  double wick_tip    = low[i + 1];
                  // ヒゲがない場合はスキップ
                  if(body_bottom - wick_tip < _Point) continue;
                  // ★ ヒゲ先端から最大N pips分だけ帯にする（実体にかぶらない）
                  double zone_low  = wick_tip;
                  double zone_high = MathMin(body_bottom, wick_tip + maxZoneWidth);
                  if(zone_low < current_price)
                  {
                     double dist = current_price - zone_high;
                     if(dist < bestBuyDist)
                     {
                        bestBuyDist = dist;
                        bestBuyHigh = zone_high;
                        bestBuyLow  = zone_low;
                        bestBuyTime = time[i + 1];
                     }
                  }
               }
            }
         }
         // ★ 最も近い1本だけを描画（色はオレンジで統一）
         if(showSellZones && bestSellTime != 0)
         {
            CreateOrangeZone("Orange_S_0", bestSellTime, bestSellHigh, bestSellLow, InpOrangeColor);
         }
         if(showBuyZones && bestBuyTime != 0)
         {
            CreateOrangeZone("Orange_B_0", bestBuyTime, bestBuyHigh, bestBuyLow, InpOrangeColor);
         }
      }
      // ★ 足が確定していない間は何もしない → ゾーンは変化しない
   }
   ChartRedraw();
   return(rates_total);
}
//+------------------------------------------------------------------+
//| サポレジ帯描画関数                                                 |
//+------------------------------------------------------------------+
void CreateZone(string name, datetime t1, double p_wick, double p_body, color col)
{
   datetime t2 = TimeCurrent() + 86400;
   if(ObjectFind(0, name) < 0)
   {
      ObjectCreate(0, name, OBJ_RECTANGLE, 0, t1, p_wick, t2, p_body);
   }
   else
   {
      ObjectMove(0, name, 0, t1, p_wick);
      ObjectMove(0, name, 1, t2, p_body);
   }
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_FILL, InpFill);
   ObjectSetInteger(0, name, OBJPROP_BACK, true);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
}
//+------------------------------------------------------------------+
//| オレンジゾーン描画関数（帯として描画）                               |
//+------------------------------------------------------------------+
void CreateOrangeZone(string name, datetime t1, double p_high, double p_low, color col)
{
   datetime t2 = TimeCurrent() + 86400;
   if(ObjectFind(0, name) < 0)
   {
      ObjectCreate(0, name, OBJ_RECTANGLE, 0, t1, p_high, t2, p_low);
   }
   else
   {
      ObjectMove(0, name, 0, t1, p_high);
      ObjectMove(0, name, 1, t2, p_low);
   }
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_FILL, InpFill);
   ObjectSetInteger(0, name, OBJPROP_BACK, true);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
}
//+------------------------------------------------------------------+
