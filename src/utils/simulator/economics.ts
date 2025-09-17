import { Econ } from "../../components/simulator/types";

/** Public defaults you already use in the UI */
export const ECON_DEFAULTS: Econ = {
  horizonYears: 5,
  dtYears: 0.1,
  maxDefectRate: 0.06,
  productionPerMonth: 15000,
  costPerDefect: 350,
  defectCapacityHit: 0.15,
  weeklyDemand: 3500,
  contributionMargin: 11500,
};

/** Simple linear mapping: defect rate falls as PIST rises */
export function defectRateFromPIST(PIST: number, econ: Econ): number {
  return Math.max(0, econ.maxDefectRate * (1 - PIST));
}

/**
 * Dollar cost for a single time step.
 * Returns rework $, lost sales $, and total $.
 */
export function dollarsForStep(
  PIST: number,
  econ: Econ,
  monthsInStep: number,
  weeksInStep: number
): { defects: number; dr: number; reworkCost: number; lostSales: number; total: number } {
  const dr = defectRateFromPIST(PIST, econ);
  const produced = econ.productionPerMonth * monthsInStep;     // units
  const defects = dr * produced;

  const reworkCost = defects * econ.costPerDefect;

  const lostUnits = defects * econ.defectCapacityHit;
  const demand = econ.weeklyDemand * weeksInStep;
  const shipped = Math.max(0, Math.min(produced - lostUnits, demand));
  const lostSales = Math.max(0, demand - shipped) * econ.contributionMargin;

  return { defects, dr, reworkCost, lostSales, total: reworkCost + lostSales };
}
