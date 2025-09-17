// Shared types for all simulators

export type RampModel = "gompertz" | "logistic" | "modified-exp";

export interface Scenario {
  id: string;
  label: string;
  color: string;
  enabled: boolean;
  model: RampModel;
  L: number;   // max attainable PIST (0..1)
  p0: number;  // initial PIST at t=0 (0..1)
  k: number;   // learning rate (>0)
}

export interface Econ {
  horizonYears: number;        // total horizon (years)
  dtYears: number;             // step (years)
  maxDefectRate: number;       // when PIST≈0 (0..1)
  productionPerMonth: number;  // units
  costPerDefect: number;       // $
  defectCapacityHit: number;   // units capacity lost per defect
  weeklyDemand: number;        // units/week
  contributionMargin: number;  // $/unit
}

export type SeriesPoint = { year: number; [key: string]: number };

export type Summary = Record<string, {
  cumM: number;      // cumulative cost in $M
  finalPIST: number; // final PIST (%) at horizon
}>;
