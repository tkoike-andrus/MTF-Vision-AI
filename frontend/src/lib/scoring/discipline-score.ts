/**
 * Discipline scoring engine
 * Port of Python backend/scoring.py
 */

const WEIGHTS = {
  reason_validity: 0.4,
  emotional_control: 0.3,
  plan_adherence: 0.2,
  risk_management: 0.1,
} as const;

const CATEGORY_VALIDITY: Record<string, number> = {
  technical: 100,
  fundamental: 80,
  custom: 50,
  emotional: 0,
};

export interface ScoreResult {
  reason_validity: number;
  emotional_control: number;
  plan_adherence: number;
  risk_management: number;
  total_score: number;
  is_rule_compliant: boolean;
}

export interface EntryReasonInput {
  category: string;
  is_mistake: boolean;
}

/**
 * Score a trade based on its entry reason
 */
export function scoreTrade(entryReason: EntryReasonInput): ScoreResult {
  const isMistake = entryReason.is_mistake;
  const category = entryReason.category;

  const reason_validity = isMistake ? 0 : (CATEGORY_VALIDITY[category] ?? 50);
  const emotional_control = isMistake ? 0 : 100;
  const plan_adherence = 100; // Phase 0: fixed
  const risk_management = 100; // Phase 0: fixed

  const total_score =
    Math.round(
      (reason_validity * WEIGHTS.reason_validity +
        emotional_control * WEIGHTS.emotional_control +
        plan_adherence * WEIGHTS.plan_adherence +
        risk_management * WEIGHTS.risk_management) *
        10
    ) / 10;

  return {
    reason_validity,
    emotional_control,
    plan_adherence,
    risk_management,
    total_score,
    is_rule_compliant: total_score >= 70,
  };
}

/**
 * Score for mistake trades (shortcut)
 */
export function scoreMistakeTrade(): ScoreResult {
  return scoreTrade({ category: "emotional", is_mistake: true });
}
