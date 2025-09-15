import { Econ, Scenario, SeriesPoint, Summary } from "./types";
import { pist } from "./pist";
import { dollarsForStep } from "./economics";

/**
 * Compute time series and summary for an array of scenarios under given economics.
 * Pure, framework-agnostic.
 */
export function computeSeries(
  scenarios: Scenario[],
  econ: Econ
): {
  series: SeriesPoint[];
  summary: Summary;
  meta: { dtYears: number; monthsInStep: number; weeksInStep: number };
} {
  const tMax = econ.horizonYears;
  const dtYears = clamp(econ.dtYears, 0.02, 1); // guard against silly steps
  const monthsInStep = 12 * dtYears;
  const weeksInStep = 52 * dtYears;

  const series: SeriesPoint[] = [];
  const cumulative: Record<string, number> = Object.fromEntries(
    scenarios.map(s => [s.id, 0])
  );
  const summary: Summary = {};

  // Loop to include both 0 and tMax
  for (let t = 0; t <= tMax + 1e-12; t += dtYears) {
    // normalize float error
    const year = +t.toFixed(6);
    const row: SeriesPoint = { year };

    for (const s of scenarios) {
      if (!s.enabled) continue;

      const P = pist(s.model, t, { L: s.L, k: s.k, p0: s.p0 }); // 0..1
      const econStep = dollarsForStep(P, econ, monthsInStep, weeksInStep);
      cumulative[s.id] += econStep.total;

      row[`PIST_${s.id}`] = P * 100;                 // %
      row[`Cost_${s.id}`] = cumulative[s.id] / 1e6;  // $M

      if (almostEqual(t, tMax)) {
        summary[s.id] = {
          cumM: cumulative[s.id] / 1e6,
          finalPIST: P * 100,
        };
      }
    }

    series.push(row);
  }

  return { series, summary, meta: { dtYears, monthsInStep, weeksInStep } };
}

function clamp(x: number, a: number, b: number) {
  return Math.max(a, Math.min(b, x));
}
function almostEqual(a: number, b: number, eps = 1e-9) {
  return Math.abs(a - b) < eps;
}
