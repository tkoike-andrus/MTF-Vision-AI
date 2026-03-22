import type { Trade } from "@/lib/types/database";

export interface LevelInfo {
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  totalXp: number;
  title: string;
  titleJa: string;
}

export interface XpBreakdown {
  tradeCompletionXp: number;
  disciplineBonusXp: number;
  winBonusXp: number;
  streakBonusXp: number;
  noMistakeBonusXp: number;
  totalXp: number;
}

export interface TradeXp {
  tradeId: string;
  baseXp: number;
  disciplineXp: number;
  winXp: number;
  streakXp: number;
  noMistakeXp: number;
  totalXp: number;
}

// Level titles
const TITLES: { maxLevel: number; en: string; ja: string }[] = [
  { maxLevel: 4, en: "Apprentice", ja: "見習い" },
  { maxLevel: 9, en: "Beginner Trader", ja: "初心者トレーダー" },
  { maxLevel: 19, en: "Trader", ja: "トレーダー" },
  { maxLevel: 29, en: "Intermediate", ja: "中級トレーダー" },
  { maxLevel: 39, en: "Advanced", ja: "上級トレーダー" },
  { maxLevel: 49, en: "Expert", ja: "エキスパート" },
  { maxLevel: 59, en: "Master", ja: "マスター" },
  { maxLevel: 69, en: "Grand Master", ja: "グランドマスター" },
  { maxLevel: 79, en: "Champion", ja: "チャンピオン" },
  { maxLevel: 89, en: "Legend", ja: "レジェンド" },
  { maxLevel: 98, en: "Mythic", ja: "神話" },
  { maxLevel: 99, en: "Legendary Trader", ja: "伝説のトレーダー" },
];

function getTitleForLevel(level: number): { en: string; ja: string } {
  for (const t of TITLES) {
    if (level <= t.maxLevel) return { en: t.en, ja: t.ja };
  }
  return TITLES[TITLES.length - 1];
}

/** XP needed to reach a given level (cumulative) */
function cumulativeXpForLevel(level: number): number {
  // Sum of 100 * i^2 for i = 1 to level-1
  // = 100 * (level-1) * level * (2*(level-1)+1) / 6
  if (level <= 1) return 0;
  const n = level - 1;
  return Math.floor(100 * n * (n + 1) * (2 * n + 1) / 6);
}

/** Get level from total XP */
export function getLevelFromXp(totalXp: number): LevelInfo {
  let level = 1;
  while (level < 99 && cumulativeXpForLevel(level + 1) <= totalXp) {
    level++;
  }

  const currentLevelXp = cumulativeXpForLevel(level);
  const nextLevelXp = cumulativeXpForLevel(level + 1);
  const title = getTitleForLevel(level);

  return {
    level,
    currentXp: totalXp - currentLevelXp,
    xpToNextLevel: level >= 99 ? 0 : nextLevelXp - currentLevelXp,
    totalXp,
    title: title.en,
    titleJa: title.ja,
  };
}

/** Calculate XP per trade with streak tracking */
export function calculateTradeXps(trades: Trade[]): TradeXp[] {
  // Sort chronologically
  const sorted = [...trades].sort(
    (a, b) => new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime()
  );

  let complianceStreak = 0;
  const result: TradeXp[] = [];

  for (const t of sorted) {
    const baseXp = 10;
    const disciplineXp = t.discipline_score
      ? Math.floor(t.discipline_score * 0.5)
      : 0;
    const winXp = t.pnl > 0 ? 15 : 0;

    // Track compliance streak
    if (t.is_rule_compliant) {
      complianceStreak++;
    } else {
      complianceStreak = 0;
    }
    const streakXp = Math.min(complianceStreak * 5, 50);

    const isMistake = t.entry_reason?.is_mistake === true;
    const noMistakeXp = !isMistake && t.discipline_score !== null ? 20 : 0;

    const totalXp = baseXp + disciplineXp + winXp + streakXp + noMistakeXp;

    result.push({
      tradeId: t.id,
      baseXp,
      disciplineXp,
      winXp,
      streakXp,
      noMistakeXp,
      totalXp,
    });
  }

  return result;
}

/** Calculate total XP from trades */
export function calculateTotalXp(trades: Trade[]): number {
  return calculateTradeXps(trades).reduce((sum, t) => sum + t.totalXp, 0);
}

/** Get XP breakdown summary */
export function getXpBreakdown(trades: Trade[]): XpBreakdown {
  const tradeXps = calculateTradeXps(trades);

  return {
    tradeCompletionXp: tradeXps.reduce((s, t) => s + t.baseXp, 0),
    disciplineBonusXp: tradeXps.reduce((s, t) => s + t.disciplineXp, 0),
    winBonusXp: tradeXps.reduce((s, t) => s + t.winXp, 0),
    streakBonusXp: tradeXps.reduce((s, t) => s + t.streakXp, 0),
    noMistakeBonusXp: tradeXps.reduce((s, t) => s + t.noMistakeXp, 0),
    totalXp: tradeXps.reduce((s, t) => s + t.totalXp, 0),
  };
}
