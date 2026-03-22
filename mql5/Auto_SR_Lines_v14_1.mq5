//+------------------------------------------------------------------+
//|                                Auto_SR_Lines_v14_1_Sandwich.mq5  |
//|                               Copyright 2026, IT Consultant & AI |
//+------------------------------------------------------------------+
#property copyright "IT Consultant & AI"
#property version   "14.01"
#property indicator_chart_window
#property indicator_plots 0
//--- 入力パラメータ
input int      InpSensitivity    = 6;               // サポレジ（黄緑・ピンク）感度
input color    InpResColor       = clrChartreuse;
input color    InpSupColor       = clrDeepPink;
input bool     InpFill           = true;
input color    InpOrangeColor    = clrOrange;
input double   InpZoneMaxPips    = 5.0;             // オレンジゾーンの最大幅
input int      InpLabelFontSize  = 12;              // 価格ラベルのフォントサイズ
//+------------------------------------------------------------------+
//| 初期化 / 終了時                                                   |
//+------------------------------------------------------------------+
int OnInit()
{
   ObjectsDeleteAll(0, "AutoRes_Zone");
   ObjectsDeleteAll(0, "AutoSup_Zone");
   ObjectsDeleteAll(0, "Orange_");
   ObjectsDeleteAll(0, "PriceLabel_");
   return(INIT_SUCCEEDED);
}
void OnDeinit(const int reason)
{
   ObjectsDeleteAll(0, "AutoRes_Zone");
   ObjectsDeleteAll(0, "AutoSup_Zone");
   ObjectsDeleteAll(0, "Orange_");
   ObjectsDeleteAll(0, "PriceLabel_");
}
//+------------------------------------------------------------------+
//| 価格ラベル作成関数                                                 |
//| displayPrice: 表示する価格（上端下端の平均値）                       |
//| anchorPrice:  ラベルを配置するY座標の基準価格（上端 or 下端）        |
//| above: true=ゾーン上端に配置, false=ゾーン下端に配置                 |
//+------------------------------------------------------------------+
void CreatePriceLabel(string name, double displayPrice, double anchorPrice, color col, bool above)
{
   string priceText = "  " + DoubleToString(displayPrice, _Digits);

   int chartW = (int)ChartGetInteger(0, CHART_WIDTH_IN_PIXELS);
   int chartH = (int)ChartGetInteger(0, CHART_HEIGHT_IN_PIXELS);

   double priceMax = ChartGetDouble(0, CHART_PRICE_MAX);
   double priceMin = ChartGetDouble(0, CHART_PRICE_MIN);
   int yPos = 0;
   if(priceMax > priceMin)
      yPos = (int)((priceMax - anchorPrice) / (priceMax - priceMin) * chartH);

   int xPos = chartW - 10;

   if(ObjectFind(0, name) < 0)
   {
      ObjectCreate(0, name, OBJ_LABEL, 0, 0, 0);
   }
   ObjectSetString(0, name, OBJPROP_TEXT, priceText);
   ObjectSetString(0, name, OBJPROP_FONT, "Arial Bold");
   ObjectSetInteger(0, name, OBJPROP_FONTSIZE, InpLabelFontSize);
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
   ObjectSetInteger(0, name, OBJPROP_BACK, false);
   ObjectSetInteger(0, name, OBJPROP_CORNER, CORNER_LEFT_UPPER);
   ObjectSetInteger(0, name, OBJPROP_XDISTANCE, xPos);
   ObjectSetInteger(0, name, OBJPROP_YDISTANCE, yPos);
   ObjectSetInteger(0, name, OBJPROP_ANCHOR, above ? ANCHOR_RIGHT_LOWER : ANCHOR_RIGHT_UPPER);
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
   if(_Period != PERIOD_H1) {
      ObjectsDeleteAll(0, "Orange_");
      ObjectsDeleteAll(0, "PriceLabel_Orange");
   }
   // 1. サポレジ（黄緑・ピンク）の判定
   bool foundRes = false, foundSup = false;
   for(int i = InpSensitivity; i < rates_total - InpSensitivity; i++)
   {
      if(foundRes && foundSup) break;
      if(!foundRes) {
         bool isP = true;
         for(int k = 1; k <= InpSensitivity; k++) if(high[i-k] > high[i] || high[i+k] > high[i]) { isP = false; break; }
         if(isP) {
            double resHigh = high[i];
            double resLow  = MathMax(open[i], close[i]);
            double resMid  = (resHigh + resLow) / 2.0;
            CreateZone("AutoRes_Zone", time[i], resHigh, resLow, InpResColor);
            // 黄緑（抵抗帯）→ 上端に表示
            CreatePriceLabel("PriceLabel_Res", resMid, resHigh, InpResColor, true);
            foundRes = true;
         }
      }
      if(!foundSup) {
         bool isT = true;
         for(int k = 1; k <= InpSensitivity; k++) if(low[i-k] < low[i] || low[i+k] < low[i]) { isT = false; break; }
         if(isT) {
            double supHigh = MathMin(open[i], close[i]);
            double supLow  = low[i];
            double supMid  = (supHigh + supLow) / 2.0;
            CreateZone("AutoSup_Zone", time[i], supLow, supHigh, InpSupColor);
            // ピンク（支持帯）→ 下端に表示
            CreatePriceLabel("PriceLabel_Sup", supMid, supLow, InpSupColor, false);
            foundSup = true;
         }
      }
   }
   // 2. オレンジゾーン判定（上下の直近1本ずつ）
   if(_Period == PERIOD_H1)
   {
      ObjectsDeleteAll(0, "Orange_");
      ObjectsDeleteAll(0, "PriceLabel_Orange");
      double current_price = close[0];
      double pipsFactor = _Point * 10;
      double maxWidth = InpZoneMaxPips * pipsFactor;
      bool sellDrawn = false;
      bool buyDrawn  = false;
      for(int i = 1; i < 200; i++)
      {
         // --- 【戻り売り候補】上方の陽線→陰線反発 ---
         if(!sellDrawn)
         {
            if(close[i+1] > open[i+1] && close[i] < open[i]) {
               double target_high = high[i+1];
               if(target_high > current_price) {
                  double zone_low = MathMax(MathMax(open[i+1], close[i+1]), target_high - maxWidth);
                  double sellMid  = (target_high + zone_low) / 2.0;
                  CreateZone("Orange_Sell", time[i+1], target_high, zone_low, InpOrangeColor);
                  // 現在価格より上 → 上端に表示
                  CreatePriceLabel("PriceLabel_Orange_Sell", sellMid, target_high, InpOrangeColor, true);
                  sellDrawn = true;
               }
            }
         }
         // --- 【押し目買い候補】下方の陰線→陽線反発 ---
         if(!buyDrawn)
         {
            if(close[i+1] < open[i+1] && close[i] > open[i]) {
               double target_low = low[i+1];
               if(target_low < current_price) {
                  double zone_high = MathMin(MathMin(open[i+1], close[i+1]), target_low + maxWidth);
                  double buyMid    = (zone_high + target_low) / 2.0;
                  CreateZone("Orange_Buy", time[i+1], zone_high, target_low, InpOrangeColor);
                  // 現在価格より下 → 下端に表示
                  CreatePriceLabel("PriceLabel_Orange_Buy", buyMid, target_low, InpOrangeColor, false);
                  buyDrawn = true;
               }
            }
         }
         if(sellDrawn && buyDrawn) break;
      }
   }
   ChartRedraw();
   return(rates_total);
}
//--- ゾーン描画関数（長方形）
void CreateZone(string name, datetime t1, double price1, double price2, color col)
{
   datetime t2 = TimeCurrent() + 86400;
   if(ObjectFind(0, name) < 0) {
      ObjectCreate(0, name, OBJ_RECTANGLE, 0, t1, price1, t2, price2);
   } else {
      ObjectMove(0, name, 0, t1, price1);
      ObjectMove(0, name, 1, t2, price2);
   }
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_FILL, InpFill);
   ObjectSetInteger(0, name, OBJPROP_BACK, true);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
}
//+------------------------------------------------------------------+
