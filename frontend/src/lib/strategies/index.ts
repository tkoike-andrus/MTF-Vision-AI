/**
 * MTF Vision AI Strategy System
 * Ported from AI-Trade project — 5 built-in strategies
 */

export interface StrategyConfig {
  name: string;
  displayName: string;
  description: string;
  category: "basic" | "advanced";
  outputFormat: "simple" | "detailed";
}

export const STRATEGIES: StrategyConfig[] = [
  {
    name: "PriceAction_logic",
    displayName: "プライスアクション (水島流)",
    description: "波の起点を重視した構造分析。ピンク/黄緑ラインの反発・ブレイクを判定",
    category: "advanced",
    outputFormat: "detailed",
  },
  {
    name: "trend_follow",
    displayName: "トレンドフォロー",
    description: "パーフェクトオーダー＋ブレイクアウトの順張り",
    category: "basic",
    outputFormat: "simple",
  },
  {
    name: "reversal_logic",
    displayName: "逆張りカウンター",
    description: "平均回帰と反転の捕捉。壁での反発を狙う",
    category: "basic",
    outputFormat: "simple",
  },
  {
    name: "short_term_logic",
    displayName: "短期モメンタム",
    description: "5分足/1時間足のモメンタム追随＋利確重視",
    category: "basic",
    outputFormat: "simple",
  },
  {
    name: "line_logic",
    displayName: "ライントレード",
    description: "ユーザー描画ライン＋MA環境認識の統合分析",
    category: "advanced",
    outputFormat: "detailed",
  },
];

export interface StrategyInput {
  symbol: string;
  currentDtStr: string;
  economicInfo: string;
  aiSummary: string;
  positionStatus: string;
  currentPrice?: string;
}

/** Build the strategy prompt with variable substitution */
export function buildStrategyPrompt(
  strategyName: string,
  input: StrategyInput,
  customTemplate?: string
): string {
  const template = customTemplate || STRATEGY_TEMPLATES[strategyName];
  if (!template) throw new Error(`Unknown strategy: ${strategyName}`);

  return template
    .replace(/\{symbol\}/g, input.symbol)
    .replace(/\{current_dt_str\}/g, input.currentDtStr)
    .replace(/\{economic_info\}/g, input.economicInfo)
    .replace(/\{ai_summary\}/g, input.aiSummary)
    .replace(/\{position_status\}/g, input.positionStatus)
    .replace(/\{current_price\}/g, input.currentPrice || "取得中");
}

// ============================================================
// Strategy Templates (ported from AI-Trade /strategies/*.txt)
// ============================================================

export const STRATEGY_TEMPLATES: Record<string, string> = {
  PriceAction_logic: `📷 Vision AI用 トレード診断プロンプト
以下の「# 戦略指示書」および「# 統合判断基準」に従い、添付された4枚の時間足チャート（M5, H1, H4, Daily）から現在のトレード優位性を診断してください。

📏 戦略指示書：MTF Vision AI
あなたは水島翔氏の「波の起点」を重視する哲学に加えて、厳格なリスク管理を融合させた最高峰の診断AIです。
視覚情報から「現在の価格がどのライン（構造的節目）に対し、どのような挙動を見せているか」を分析し、エントリーの是非を回答してください。

## 1. 入力情報
* **取引通貨ペア**: {symbol}
* **現在時刻**: {current_dt_str}
* **本日の重要経済指標**:
{economic_info}
* **AI朝刊サマリ**: {ai_summary}
* **現在のポジション状況**: {position_status}

* **チャートレイアウト構成（マルチタイムフレーム分析）**:
    提供された画像は、以下の4つの時間足が結合されている。
    - **左上 (M5)**: 5分足 — 損切り幅を極限まで狭くするためのタイミング取り
    - **右上 (H1)**: 1時間足 — トレードの基準（メインの戦場）
    - **左下 (H4)**: 4時間足 — 大きな流れの確認
    - **右下 (Daily)**: 日足 — 現在地の把握

1. チャート上のライン定義と役割
#ピンク色の水平線 (Structural Support): 最高値・最安値を作った「起点」となるレート。BUY戦略の絶対的根拠。
#黄緑色の水平線 (Structural Resistance): 戻り高値や強い抵抗。SELL戦略の絶対的根拠。
#オレンジ色の斜め線 (Trend Lines): 補助的な構造。

2. 【最重要】Goサインの定義（BUY vs SELL）

■ BUY Goサイン
位置: 価格がピンク色の水平線の直上、またはゾーン内に食い込んでいる。
挙動: M5の確定足がピンクラインをヒゲで抜けても実体で押し戻された。
形状: 「陽線の包み足」または「長い下ヒゲ（ピンバー）」が出現。
確信: H1レベルで初押しがピンクラインに支えられた。

■ SELL Goサイン
位置: 価格が黄緑色の水平線の直下、またはゾーン内に食い込んでいる。
挙動: M5の確定足が黄緑ラインをヒゲで抜けても実体で押し戻された。
形状: 「陰線の包み足」または「長い上ヒゲ（ピンバー）」が出現。
確信: H1レベルで初戻りが黄緑ラインに抑えられた。

3. 回避（WAIT）および撤退（EXIT）の基準
No Go: ノイズ相場、一本調子の突進、ジリジリとした侵食。
Invalidation: BUY→ピンクラインをH1実体で下抜け → EXIT / SELL→黄緑ラインをH1実体で上抜け → EXIT

4. 資金管理
Type A (H1基準): 損切り幅が広い → ロットを落とす
Type B (M5基準): 損切りを極小に置ける → 通常ロット

5. 最終出力フォーマット (JSON)
{
  "market_context": {
    "symbol": "{symbol}",
    "environment": "H4/Dailyに基づく長期目線",
    "short_term_bias": "H1の起点に基づいた現在の目線"
  },
  "zone_analysis": {
    "status": "接近中 / 到達 / ブレイク中 / 反発",
    "visual_observation": "どの足種(M5/H1/H4/Daily)のどのライン(色+種類)に対して現在価格がどのような歩調を見せているか"
  },
  "trade_setup": {
    "action": "BUY / SELL / WAIT / HOLD / EXIT",
    "score": "0-100",
    "entry_style": "Type A / Type B / None",
    "reason": "具体的根拠（どの足種のどのラインかを必ず明記。例: H4の黄緑水平線）",
    "entry_price_area": "推奨レート",
    "invalidation_price_area": "損切りライン",
    "target_price_area": "利確目標"
  },
  "confidence": 0.0
}`,

  trend_follow: `# 🚀 FX売買戦略指示書：MTF Vision AI 知能連携プロトコル

## 1. 入力コンテキストの統合
- 基準時刻（日本時間）: {current_dt_str}
- 監視通貨ペア: {symbol}
- AIストラテジストの戦略要約: {ai_summary}
- 本日の経済指標（生データ）: {economic_info}

## 2. 画像構成と時間定義
- 提供画像は 5分足(左上), 1時間足(右上), 4時間足(左下), 日足(右下) です。
- **重要：チャート時刻の換算ルール**
  - チャート上の表示時刻に **+6時間** したものが日本時間である。

## 3. 分析手順と思考プロセス
### ステップ1：視覚的環境認識と知能連携
- 各時間足のMA傾き、ローソク足との位置関係からトレンドを特定。
- 「何度も止められている水平線」や「トレンドライン」を視覚的に抽出。
- AIストラテジストのファンダメンタルズ的リスク時間を最優先。

### ステップ2：執行ロジック
- 【BUY】: 5分足で直近高値やレジスタンスを実体がブレイクし、上位足がパーフェクトオーダー（上昇）の場合。
- 【SELL】: 5分足で直近安値やサポートを実体がブレイクし、上位足がパーフェクトオーダー（下降）の場合。
- 【WAIT】: 方向感のないレンジ、乱高下、または重要指標発表の前後30分以内。
- 【EXIT】: 保有ポジションと逆方向の強いプライスアクション。

### ステップ3：最終判断（フィルター）
- 逆張りサイン、主要抵抗帯至近での反発兆しは「WAIT」。
- エントリー後の伸びしろが十分でない場合は見送り。

## 4. 出力形式 (厳守：JSON形式のみ)
{
  "action": "BUY / SELL / EXIT / WAIT",
  "confidence": 0.0,
  "reason": "日本時間◯時◯分のチャート事象とAI戦略を統合した根拠"
}`,

  reversal_logic: `# 🚀 FX売買戦略指示書：MTF Vision AI 逆張り（カウンター）プロトコル

## 1. 入力コンテキストの統合
- 基準時刻（日本時間）: {current_dt_str}
- 監視通貨ペア: {symbol}
- AIストラテジストの戦略要約: {ai_summary}
- 本日の経済指標（生データ）: {economic_info}

## 2. 画像構成と時間定義
- 提供画像は 5分足(左上), 1時間足(右上), 4時間足(左下), 日足(右下) です。

## 3. 戦略コンセプト：平均回帰と反転の捕捉
トレンドの終焉やレンジ上下限での「行き過ぎ」を捉え、中央（平均）への回帰を狙う。

## 4. 分析手順
### ステップ1：視覚的な「壁」の特定
- 4時間足・1時間足で過去に何度も止められている強力な水平線を特定。
- 主要MAからの大きな乖離と過熱感を確認。

### ステップ2：反転のプライスアクション確認（5分足）
- **SELL狙い**: 抵抗帯付近で「長い上ヒゲ」「包み足（陰線）」「ダブルトップ」。
- **BUY狙い**: 支持帯付近で「長い下ヒゲ」「包み足（陽線）」「ダブルボトム」。
- 重要指標発表直後の「ヒゲ」による全戻しは最優先サイン。

### ステップ3：最終判断
- 【BUY】: 強力な支持帯で下ヒゲを伴って反発を開始した瞬間。
- 【SELL】: 強力な抵抗帯で上ヒゲを伴って反落を開始した瞬間。
- 【WAIT】: 中途半端な価格位置、または壁を勢いよくブレイクし続けている場合。
- 【EXIT】: 反転の勢いが弱まり、元のトレンド方向へ再帰した場合。

## 5. 出力形式 (厳守)
{
  "action": "BUY / SELL / EXIT / WAIT",
  "confidence": 0.0,
  "reason": "日本時間◯時◯分のチャート事象と、どの壁に注目して反転を判断したか"
}`,

  short_term_logic: `# 🚀 FX売買戦略指示書：MTF Vision AI 短期トレンド追随（モメンタム＆ブレイク）プロトコル

## 1. 入力コンテキストの統合
- 基準時刻（日本時間）: {current_dt_str}
- 監視通貨ペア: {symbol}
- AIストラテジストの戦略要約: {ai_summary}
- 本日の経済指標（生データ）: {economic_info}
- **現在のポジション状況**: {position_status}

## 2. 画像構成と時間定義
- 提供画像は 5分足(左上), 1時間足(右上), 4時間足(左下), 日足(右下) です。

## 3. 戦略コンセプト：短期モメンタムの「突破」と「利益確保」
短期足（5分足・1時間足）の強力なモメンタムに追随。
ポジション保有中は「高値圏での停滞」や「過熱感」を察知して利確最優先。

## 4. 分析手順
### ステップ1：ポジション状況による分岐 (最優先)
- **ポジション保有中**: HOLD or EXIT のみ。BUY/SELL/WAITは禁止。
- **ノーポジション**: BUY/SELL/WAIT のみ。HOLD/EXITは禁止。

### ステップ2：執行ロジック
#### A. 新規エントリー
- 【BUY】: 5分足と1時間足が共に上昇トレンドで陽線実体が強い。
- 【SELL】: 5分足と1時間足が共に下降トレンドで陰線実体が強い。
- 【WAIT】: 方向感不一致、トレンドレス、または指標発表直前。

#### B. 出口戦略（利益確保モード）
1. **ラウンドナンバーでの失速**: 心理的節目でレンジ化。
2. **クライマックス・パターン**: 長い陽線後のはらみ足/十字線。
3. **モメンタムの消失**: 実体が極小化しヒゲが目立つ。
4. **従来の反転サイン**: MAブレイク、包み足、ダブルトップ/ボトム。

## 5. 出力形式 (厳守)
{
  "action": "BUY / SELL / EXIT / WAIT / HOLD",
  "confidence": 0.0,
  "reason": "ポジション状況({position_status})に基づく判断根拠を日本時間で記述"
}`,

  line_logic: `# 📏 FXライントレード特化型戦略指示書 (Line Trade Logic)

あなたは世界最高峰のライントレーダーであり、冷徹なリスクマネージャーです。
「移動平均線による環境認識」と「ユーザー描画ライン」を統合して高精度のトレード戦略を執行してください。

## 1. 入力情報
* **取引通貨ペア**: {symbol}
* **現在時刻**: {current_dt_str}
* **本日の重要経済指標**: {economic_info}
* **AI朝刊サマリ**: {ai_summary}
* **現在のポジション状況**: {position_status}

* **チャートレイアウト**:
    - 左上 (M5): 5分足 — 短期エントリー/決済判断
    - 右上 (H1): 1時間足 — 短期トレンド確認
    - 左下 (H4): 4時間足 — 中期トレンド・環境認識
    - 右下 (Daily): 日足 — 長期トレンド

* **チャート上の重要ライン**:
    - **ピンク色の水平線**: 強力なレジスタンス/サポートライン
    - **オレンジ色の斜め線**: トレンドライン

## 2. ライン接触・ブレイクの定義
1. **接近中**: 実体もヒゲもラインに未到達
2. **到達・反発**: ヒゲがタッチまたは一時的に跨いで戻った状態
3. **ブレイク**: 終値がラインの反対側で確定

## 3. ポジション管理
- エントリー価格を割っても、構造的サポートが守られている限りはHOLD。
- 直近サポートラインのブレイク → 即EXIT。

## 4. 新規エントリー
### 順張り: 上昇トレンド中、下のピンク/オレンジで実体反発 → BUY
### レンジ逆張り: 下のピンクで反発 → BUY / 上のピンクで反落 → SELL

## 5. 出力形式 (厳守：JSON)
{
  "action": "BUY / SELL / EXIT / HOLD / WAIT",
  "confidence": 0.0,
  "reason": "どのラインのブレイク/反発を根拠にしたか"
}`,
};
