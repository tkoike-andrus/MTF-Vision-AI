//+------------------------------------------------------------------+
//|                                Auto_SR_Lines_v14_1_Sandwich.mq5  |
//|                               Copyright 2026, IT Consultant & AI |
//+------------------------------------------------------------------+
#property copyright "IT Consultant & AI"
#property version   "14.06"
#property indicator_chart_window
#property indicator_plots 0
//--- 入力パラメータ
input int      InpSensitivity    = 12;              // ピボット感度（ZigZag Depth=12と同期）
input color    InpResColor       = clrChartreuse;   // 抵抗帯（2番目の上方ピボット）
input color    InpSupColor       = clrDeepPink;     // 支持帯（2番目の下方ピボット）
input bool     InpFill           = true;
input color    InpOrangeColor    = clrOrange;       // 中間帯（1番目のピボット）
input color    InpBrokenColor    = clrSlateGray;    // ブレイク済みゾーンの色
input double   InpZoneMaxPips    = 5.0;             // オレンジゾーンの最大幅
input int      InpLabelFontSize  = 12;              // 価格ラベルのフォントサイズ
//--- バー確定検出用
datetime g_lastH1BarTime = 0;
datetime g_lastBarTime   = 0;
//--- ゾーン価格記録（ブレイク判定用）
double g_resZoneHigh = 0, g_resZoneLow = 0;
double g_supZoneHigh = 0, g_supZoneLow = 0;
double g_sellZoneHigh = 0, g_sellZoneLow = 0;
double g_buyZoneHigh  = 0, g_buyZoneLow  = 0;
bool   g_hasResZone   = false, g_hasSupZone  = false;
bool   g_hasSellZone  = false, g_hasBuyZone  = false;
//--- 初回スキャン済みフラグ（チャート再起動時のブレイク済みゾーン復元用）
bool   g_initialScanDone = false;
//--- ブレイク済みゾーン連番カウンタ
int    g_brokenSellCount = 0;
int    g_brokenBuyCount  = 0;
int    g_brokenResCount  = 0;
int    g_brokenSupCount  = 0;
//+------------------------------------------------------------------+
int OnInit()
{
   g_lastH1BarTime = 0;
   g_lastBarTime   = 0;
   g_hasResZone = false; g_hasSupZone = false;
   g_hasSellZone = false; g_hasBuyZone = false;
   g_initialScanDone = false;
   g_brokenSellCount = 0; g_brokenBuyCount = 0;
   g_brokenResCount = 0; g_brokenSupCount = 0;
   ObjectsDeleteAll(0, "AutoRes_");
   ObjectsDeleteAll(0, "AutoSup_");
   ObjectsDeleteAll(0, "Orange_");
   ObjectsDeleteAll(0, "Broken_");
   ObjectsDeleteAll(0, "PriceLabel_");
   return(INIT_SUCCEEDED);
}
void OnDeinit(const int reason)
{
   ObjectsDeleteAll(0, "AutoRes_");
   ObjectsDeleteAll(0, "AutoSup_");
   ObjectsDeleteAll(0, "Orange_");
   ObjectsDeleteAll(0, "Broken_");
   ObjectsDeleteAll(0, "PriceLabel_");
}
//+------------------------------------------------------------------+
void CreatePriceLabel(string name, double displayPrice, double anchorPrice, color col, bool above)
{
   string priceText = DoubleToString(displayPrice, _Digits);
   datetime labelTime = iTime(_Symbol, _Period, 0);
   if(ObjectFind(0, name) < 0)
      ObjectCreate(0, name, OBJ_TEXT, 0, labelTime, anchorPrice);
   else
      ObjectMove(0, name, 0, labelTime, anchorPrice);
   ObjectSetString(0, name, OBJPROP_TEXT, priceText);
   ObjectSetString(0, name, OBJPROP_FONT, "Arial Bold");
   ObjectSetInteger(0, name, OBJPROP_FONTSIZE, InpLabelFontSize);
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
   ObjectSetInteger(0, name, OBJPROP_BACK, false);
   ObjectSetInteger(0, name, OBJPROP_ANCHOR, above ? ANCHOR_RIGHT_LOWER : ANCHOR_RIGHT_UPPER);
}
//+------------------------------------------------------------------+
void CreateZone(string name, datetime t1, double price1, double price2, color col)
{
   datetime t2 = TimeCurrent() + 86400;
   if(ObjectFind(0, name) < 0)
      ObjectCreate(0, name, OBJ_RECTANGLE, 0, t1, price1, t2, price2);
   else {
      ObjectMove(0, name, 0, t1, price1);
      ObjectMove(0, name, 1, t2, price2);
   }
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_FILL, InpFill);
   ObjectSetInteger(0, name, OBJPROP_BACK, true);
   ObjectSetInteger(0, name, OBJPROP_SELECTABLE, false);
}
//+------------------------------------------------------------------+
void ConvertToBroken(string srcZone, string srcLabel,
                     string brkZone, string brkLabel,
                     double zHigh, double zLow, bool above)
{
   ObjectDelete(0, brkZone);
   ObjectDelete(0, brkLabel);
   datetime t1 = (datetime)ObjectGetInteger(0, srcZone, OBJPROP_TIME, 0);
   if(t1 == 0) t1 = TimeCurrent();
   ObjectDelete(0, srcZone);
   ObjectDelete(0, srcLabel);
   CreateZone(brkZone, t1, zHigh, zLow, InpBrokenColor);
   double mid = (zHigh + zLow) / 2.0;
   CreatePriceLabel(brkLabel, mid, above ? zHigh : zLow, InpBrokenColor, above);
}
//+------------------------------------------------------------------+
//| 過去データでブレイク済みかチェック（チャート再起動対応）             |
//|   zoneBarIndex: ゾーンが形成されたバーのインデックス                |
//|   zonePrice: ブレイク判定の基準価格（上方=zHigh, 下方=zLow）       |
//|   isAbove: true=上方ブレイク(close>zonePrice), false=下方ブレイク  |
//+------------------------------------------------------------------+
bool IsAlreadyBroken(int zoneBarIndex, double zonePrice, bool isAbove,
                     const double &closeArr[], int total)
{
   int startIdx = 1;
   int endIdx = MathMin(zoneBarIndex - 1, total - 1);
   for(int i = startIdx; i <= endIdx; i++) {
      if(isAbove && closeArr[i] > zonePrice) return true;
      if(!isAbove && closeArr[i] < zonePrice) return true;
   }
   return false;
}
//+------------------------------------------------------------------+
//| ブレイク済みゾーンを直接SlateGrayで作成（連番対応）                 |
//+------------------------------------------------------------------+
void CreateBrokenDirect(string prefix, int &counter, datetime t1,
                        double zHigh, double zLow, bool above)
{
   counter++;
   string zoneName  = prefix + "_" + IntegerToString(counter);
   string labelName = "PriceLabel_" + prefix + "_" + IntegerToString(counter);
   CreateZone(zoneName, t1, zHigh, zLow, InpBrokenColor);
   double mid = (zHigh + zLow) / 2.0;
   CreatePriceLabel(labelName, mid, above ? zHigh : zLow, InpBrokenColor, above);
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

   // H1以外ではオレンジ非表示
   if(_Period != PERIOD_H1) {
      ObjectsDeleteAll(0, "Orange_");
      ObjectsDeleteAll(0, "Broken_Orange");
      ObjectsDeleteAll(0, "PriceLabel_Orange");
      ObjectsDeleteAll(0, "PriceLabel_Broken_Orange");
   }

   // =================================================================
   // バー確定検出
   // =================================================================
   datetime currentBar = time[0];
   bool isNewBar = (currentBar != g_lastBarTime);
   if(isNewBar) g_lastBarTime = currentBar;

   bool isNewH1Bar = false;
   if(_Period == PERIOD_H1) {
      datetime curH1 = iTime(_Symbol, PERIOD_H1, 0);
      if(curH1 != g_lastH1BarTime) {
         g_lastH1BarTime = curH1;
         isNewH1Bar = true;
      }
   }

   // =================================================================
   // リアルタイムブレイク判定（バー確定時のみ）
   // =================================================================
   if(isNewBar)
   {
      double confirmed = close[1];

      // 黄緑ブレイク: 確定足が上端を上抜け
      if(g_hasResZone && confirmed > g_resZoneHigh) {
         ConvertToBroken("AutoRes_Zone", "PriceLabel_Res",
                         "Broken_Res", "PriceLabel_Broken_Res",
                         g_resZoneHigh, g_resZoneLow, true);
         g_hasResZone = false;
      }
      // ピンクブレイク: 確定足が下端を下抜け
      if(g_hasSupZone && confirmed < g_supZoneLow) {
         ConvertToBroken("AutoSup_Zone", "PriceLabel_Sup",
                         "Broken_Sup", "PriceLabel_Broken_Sup",
                         g_supZoneHigh, g_supZoneLow, false);
         g_hasSupZone = false;
      }
   }

   // H1バー確定時: オレンジブレイク判定
   if(isNewH1Bar)
   {
      double confirmed = close[1];
      if(g_hasSellZone && confirmed > g_sellZoneHigh) {
         ConvertToBroken("Orange_Sell", "PriceLabel_Orange_Sell",
                         "Broken_Orange_Sell", "PriceLabel_Broken_Orange_Sell",
                         g_sellZoneHigh, g_sellZoneLow, true);
         g_hasSellZone = false;
      }
      if(g_hasBuyZone && confirmed < g_buyZoneLow) {
         ConvertToBroken("Orange_Buy", "PriceLabel_Orange_Buy",
                         "Broken_Orange_Buy", "PriceLabel_Broken_Orange_Buy",
                         g_buyZoneHigh, g_buyZoneLow, false);
         g_hasBuyZone = false;
      }
   }

   // =================================================================
   // 統合ピボット検出（サンドイッチ構造）
   //   上方: 1番目 → オレンジ売り, 2番目 → 黄緑（抵抗帯）
   //   下方: 1番目 → オレンジ買い, 2番目 → ピンク（支持帯）
   //   ★ ブレイク済みピボットはSlateGrayで直接作成し、カウントしない
   // =================================================================
   double current_price = close[0];

   // --- 上方ピボット検出 ---
   if(!g_hasSellZone || !g_hasResZone)
   {
      int foundAbove = 0;   // 非ブレイクのピボットカウント
      for(int i = InpSensitivity; i < rates_total - InpSensitivity; i++)
      {
         if(foundAbove >= 2) break;
         if(g_hasSellZone && g_hasResZone) break;

         bool isPivotHigh = true;
         for(int k = 1; k <= InpSensitivity; k++)
            if(high[i-k] > high[i] || high[i+k] > high[i]) { isPivotHigh = false; break; }
         if(!isPivotHigh) continue;
         if(high[i] <= current_price) continue;

         // --- ゾーン価格を先に計算 ---
         double zHigh = high[i];
         double pipsFactor = _Point * 10;
         double maxW = InpZoneMaxPips * pipsFactor;
         double zLow_orange = MathMax(MathMax(open[i], close[i]), zHigh - maxW);
         double zLow_green  = MathMax(open[i], close[i]);

         // --- ★ ブレイク済みチェック（作成前に判定）---
         bool alreadyBroken = IsAlreadyBroken(i, zHigh, true, close, rates_total);

         if(alreadyBroken) {
            // ブレイク済み → SlateGrayとして直接描画、foundAboveカウントしない
            if(_Period == PERIOD_H1 && !g_hasSellZone) {
               // オレンジ候補だったがブレイク済み
               CreateBrokenDirect("Broken_Orange_Sell", g_brokenSellCount,
                                  time[i], zHigh, zLow_orange, true);
            } else if(g_hasSellZone && !g_hasResZone) {
               // 黄緑候補だったがブレイク済み
               CreateBrokenDirect("Broken_Res", g_brokenResCount,
                                  time[i], zHigh, zLow_green, true);
            }
            continue;  // カウントせずスキップ
         }

         // --- ブレイクされていない有効なピボット ---
         foundAbove++;
         if(foundAbove == 1 && !g_hasSellZone && _Period == PERIOD_H1)
         {
            // 1番目 → オレンジ売り
            if(isNewH1Bar || !g_hasSellZone) {
               ObjectDelete(0, "Orange_Sell");
               ObjectDelete(0, "PriceLabel_Orange_Sell");
               CreateZone("Orange_Sell", time[i], zHigh, zLow_orange, InpOrangeColor);
               double mid = (zHigh + zLow_orange) / 2.0;
               CreatePriceLabel("PriceLabel_Orange_Sell", mid, zHigh, InpOrangeColor, true);
               g_sellZoneHigh = zHigh; g_sellZoneLow = zLow_orange;
               g_hasSellZone = true;
            }
         }
         else if(foundAbove == 1 && (g_hasSellZone || _Period != PERIOD_H1))
         {
            foundAbove++;
         }

         if(foundAbove == 2 && !g_hasResZone)
         {
            // 2番目 → 黄緑（抵抗帯）
            ObjectDelete(0, "AutoRes_Zone");
            ObjectDelete(0, "PriceLabel_Res");
            CreateZone("AutoRes_Zone", time[i], zHigh, zLow_green, InpResColor);
            double resMid = (zHigh + zLow_green) / 2.0;
            CreatePriceLabel("PriceLabel_Res", resMid, zHigh, InpResColor, true);
            g_resZoneHigh = zHigh; g_resZoneLow = zLow_green;
            g_hasResZone = true;
         }
      }
   }

   // --- 下方ピボット検出 ---
   if(!g_hasBuyZone || !g_hasSupZone)
   {
      int foundBelow = 0;
      for(int i = InpSensitivity; i < rates_total - InpSensitivity; i++)
      {
         if(foundBelow >= 2) break;
         if(g_hasBuyZone && g_hasSupZone) break;

         bool isPivotLow = true;
         for(int k = 1; k <= InpSensitivity; k++)
            if(low[i-k] < low[i] || low[i+k] < low[i]) { isPivotLow = false; break; }
         if(!isPivotLow) continue;
         if(low[i] >= current_price) continue;

         // --- ゾーン価格を先に計算 ---
         double zLow = low[i];
         double pipsFactor = _Point * 10;
         double maxW = InpZoneMaxPips * pipsFactor;
         double zHigh_orange = MathMin(MathMin(open[i], close[i]), zLow + maxW);
         double zHigh_pink   = MathMin(open[i], close[i]);

         // --- ★ ブレイク済みチェック（作成前に判定）---
         bool alreadyBroken = IsAlreadyBroken(i, zLow, false, close, rates_total);

         if(alreadyBroken) {
            if(_Period == PERIOD_H1 && !g_hasBuyZone) {
               CreateBrokenDirect("Broken_Orange_Buy", g_brokenBuyCount,
                                  time[i], zHigh_orange, zLow, false);
            } else if(g_hasBuyZone && !g_hasSupZone) {
               CreateBrokenDirect("Broken_Sup", g_brokenSupCount,
                                  time[i], zHigh_pink, zLow, false);
            }
            continue;
         }

         // --- ブレイクされていない有効なピボット ---
         foundBelow++;
         if(foundBelow == 1 && !g_hasBuyZone && _Period == PERIOD_H1)
         {
            if(isNewH1Bar || !g_hasBuyZone) {
               ObjectDelete(0, "Orange_Buy");
               ObjectDelete(0, "PriceLabel_Orange_Buy");
               CreateZone("Orange_Buy", time[i], zHigh_orange, zLow, InpOrangeColor);
               double mid = (zHigh_orange + zLow) / 2.0;
               CreatePriceLabel("PriceLabel_Orange_Buy", mid, zLow, InpOrangeColor, false);
               g_buyZoneHigh = zHigh_orange; g_buyZoneLow = zLow;
               g_hasBuyZone = true;
            }
         }
         else if(foundBelow == 1 && (g_hasBuyZone || _Period != PERIOD_H1))
         {
            foundBelow++;
         }

         if(foundBelow == 2 && !g_hasSupZone)
         {
            ObjectDelete(0, "AutoSup_Zone");
            ObjectDelete(0, "PriceLabel_Sup");
            CreateZone("AutoSup_Zone", time[i], zLow, zHigh_pink, InpSupColor);
            double supMid = (zHigh_pink + zLow) / 2.0;
            CreatePriceLabel("PriceLabel_Sup", supMid, zLow, InpSupColor, false);
            g_supZoneHigh = zHigh_pink; g_supZoneLow = zLow;
            g_hasSupZone = true;
         }
      }
   }

   // =================================================================
   // ブレイク済みゾーン復元（チャート再起動・価格超え対応）
   //   価格がピボットを超えた場合、そのピボットは上方/下方スキャンの
   //   対象外になる。初回のみ別途スキャンしてSlateGrayで描画する。
   // =================================================================
   if(!g_initialScanDone && _Period == PERIOD_H1)
   {
      g_initialScanDone = true;
      int maxScan = MathMin(rates_total - InpSensitivity, 500);

      // --- 上方ブレイク済み: 現在価格以下のピボットハイ（価格に超えられた売りゾーン）---
      for(int i = InpSensitivity; i < maxScan; i++)
      {
         bool isPH = true;
         for(int k = 1; k <= InpSensitivity; k++)
            if(high[i-k] > high[i] || high[i+k] > high[i]) { isPH = false; break; }
         if(!isPH) continue;
         if(high[i] >= current_price) continue;  // まだ上方にある → メインロジックで処理済み

         // 既存ゾーンと重複するピボットはスキップ
         if(g_hasSellZone && MathAbs(high[i] - g_sellZoneHigh) < _Point * 10) continue;
         if(g_hasResZone  && MathAbs(high[i] - g_resZoneHigh)  < _Point * 10) continue;
         if(g_hasSupZone  && high[i] <= g_supZoneLow) continue;  // サポート以下は対象外

         double zHigh = high[i];
         double maxW  = InpZoneMaxPips * _Point * 10;
         double zLow  = MathMax(MathMax(open[i], close[i]), zHigh - maxW);
         CreateBrokenDirect("Broken_Orange_Sell", g_brokenSellCount, time[i], zHigh, zLow, true);
         break;  // 最も近い1つのみ
      }

      // --- 下方ブレイク済み: 現在価格以上のピボットロー（価格に超えられた買いゾーン）---
      for(int i = InpSensitivity; i < maxScan; i++)
      {
         bool isPL = true;
         for(int k = 1; k <= InpSensitivity; k++)
            if(low[i-k] < low[i] || low[i+k] < low[i]) { isPL = false; break; }
         if(!isPL) continue;
         if(low[i] <= current_price) continue;  // まだ下方にある → メインロジックで処理済み

         if(g_hasBuyZone && MathAbs(low[i] - g_buyZoneLow)  < _Point * 10) continue;
         if(g_hasSupZone && MathAbs(low[i] - g_supZoneLow)  < _Point * 10) continue;
         if(g_hasResZone && low[i] >= g_resZoneHigh) continue;  // レジスタンス以上は対象外

         double zLow  = low[i];
         double maxW  = InpZoneMaxPips * _Point * 10;
         double zHigh = MathMin(MathMin(open[i], close[i]), zLow + maxW);
         CreateBrokenDirect("Broken_Orange_Buy", g_brokenBuyCount, time[i], zHigh, zLow, false);
         break;  // 最も近い1つのみ
      }
   }

   // 既存ゾーンのラベル位置を最新バーに更新
   if(g_hasResZone)
      CreatePriceLabel("PriceLabel_Res", (g_resZoneHigh+g_resZoneLow)/2.0, g_resZoneHigh, InpResColor, true);
   if(g_hasSupZone)
      CreatePriceLabel("PriceLabel_Sup", (g_supZoneHigh+g_supZoneLow)/2.0, g_supZoneLow, InpSupColor, false);
   if(g_hasSellZone)
      CreatePriceLabel("PriceLabel_Orange_Sell", (g_sellZoneHigh+g_sellZoneLow)/2.0, g_sellZoneHigh, InpOrangeColor, true);
   if(g_hasBuyZone)
      CreatePriceLabel("PriceLabel_Orange_Buy", (g_buyZoneHigh+g_buyZoneLow)/2.0, g_buyZoneLow, InpOrangeColor, false);

   // =================================================================
   // SR Levels JSON出力（フェーズ判定用）
   // =================================================================
   if(isNewBar)
      WriteSRLevelsJSON();

   ChartRedraw();
   return(rates_total);
}
//+------------------------------------------------------------------+
//| SRレベルをJSONファイルに書き出し（chart_uploader経由でSupabaseへ）   |
//+------------------------------------------------------------------+
void WriteSRLevelsJSON()
{
   string filePath = "AATM_Charts\\sr_levels.json";
   int handle = FileOpen(filePath, FILE_WRITE | FILE_TXT | FILE_ANSI);
   if(handle == INVALID_HANDLE) return;

   string json = "{\n";
   json += "  \"symbol\": \"" + _Symbol + "\",\n";
   json += "  \"updated_at\": \"" + TimeToString(TimeCurrent(), TIME_DATE|TIME_SECONDS) + "\",\n";
   json += "  \"current_price\": " + DoubleToString(SymbolInfoDouble(_Symbol, SYMBOL_BID), _Digits) + ",\n";
   json += "  \"zones\": [\n";

   bool first = true;

   // =================================================================
   // オブジェクト直接スキャン方式（フラグ不一致問題を根本解決）
   // =================================================================

   // --- アクティブゾーン: チャートオブジェクトの存在で判定 ---
   string activeNames[]  = {"AutoRes_Zone",  "AutoSup_Zone", "Orange_Sell",  "Orange_Buy"};
   string activeTypes[]  = {"resistance",    "support",      "orange_sell",  "orange_buy"};
   string activeColors[] = {"green",         "pink",         "orange",       "orange"};
   for(int a = 0; a < 4; a++) {
      if(ObjectFind(0, activeNames[a]) >= 0) {
         double p0 = ObjectGetDouble(0, activeNames[a], OBJPROP_PRICE, 0);
         double p1 = ObjectGetDouble(0, activeNames[a], OBJPROP_PRICE, 1);
         if(p0 > 0 && p1 > 0) {
            double zH = MathMax(p0, p1);
            double zL = MathMin(p0, p1);
            if(!first) json += ",\n";
            json += "    {\"type\":\"" + activeTypes[a] + "\",\"color\":\"" + activeColors[a]
                  + "\",\"high\":" + DoubleToString(zH, _Digits)
                  + ",\"low\":" + DoubleToString(zL, _Digits) + ",\"broken\":false}";
            first = false;
         }
      }
   }

   // --- ブレイク済みゾーン: リアルタイム変換分（固定名）---
   string rtNames[] = {"Broken_Orange_Sell", "Broken_Orange_Buy", "Broken_Res", "Broken_Sup"};
   string rtTypes[] = {"broken_orange_sell", "broken_orange_buy", "broken_res", "broken_sup"};
   for(int b = 0; b < 4; b++) {
      if(ObjectFind(0, rtNames[b]) >= 0) {
         double p0 = ObjectGetDouble(0, rtNames[b], OBJPROP_PRICE, 0);
         double p1 = ObjectGetDouble(0, rtNames[b], OBJPROP_PRICE, 1);
         if(p0 > 0 && p1 > 0) {
            double zH = MathMax(p0, p1);
            double zL = MathMin(p0, p1);
            if(!first) json += ",\n";
            json += "    {\"type\":\"" + rtTypes[b] + "\",\"color\":\"slategray\",\"high\":"
                  + DoubleToString(zH, _Digits) + ",\"low\":" + DoubleToString(zL, _Digits) + ",\"broken\":true}";
            first = false;
         }
      }
   }

   // --- ブレイク済みゾーン: 連番分（CreateBrokenDirect）---
   string seqPrefixes[] = {"Broken_Orange_Sell", "Broken_Orange_Buy", "Broken_Res", "Broken_Sup"};
   string seqTypes[]    = {"broken_orange_sell", "broken_orange_buy", "broken_res", "broken_sup"};
   int    seqCounts[]   = {g_brokenSellCount, g_brokenBuyCount, g_brokenResCount, g_brokenSupCount};
   for(int p = 0; p < 4; p++) {
      for(int n = 1; n <= seqCounts[p]; n++) {
         string objName = seqPrefixes[p] + "_" + IntegerToString(n);
         if(ObjectFind(0, objName) >= 0) {
            double p0 = ObjectGetDouble(0, objName, OBJPROP_PRICE, 0);
            double p1 = ObjectGetDouble(0, objName, OBJPROP_PRICE, 1);
            if(p0 > 0 && p1 > 0) {
               double zH = MathMax(p0, p1);
               double zL = MathMin(p0, p1);
               if(!first) json += ",\n";
               json += "    {\"type\":\"" + seqTypes[p] + "\",\"color\":\"slategray\",\"high\":"
                     + DoubleToString(zH, _Digits) + ",\"low\":" + DoubleToString(zL, _Digits) + ",\"broken\":true}";
               first = false;
            }
         }
      }
   }

   json += "\n  ]\n}";
   FileWriteString(handle, json);
   FileClose(handle);
}
