import { RampModel } from "../../components/simulator/types";

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * PIST ramp laws
 * - modified-exp: first-order approach from p0 to L
 * - logistic: symmetric S-curve (t0 is inflection)
 * - gompertz: fast start, long tail (t0 shifts the curve)
 */
export function pist(
  model: RampModel,
  t: number,
  opts: { L: number; k: number; p0: number; t0?: number }
): number {
  const { p0, k } = opts;
  const L = clamp01(opts.L);
  const t0 = opts.t0 ?? 0.4;

  if (model === "modified-exp") {
    const v = L - (L - clamp01(p0)) * Math.exp(-Math.max(0, k) * t);
    return clamp01(v);
  }

  if (model === "logistic") {
    const v = L / (1 + Math.exp(-Math.max(0, k) * (t - t0)));
    return clamp01(v);
  }

  // gompertz
  const v = L * Math.exp(-Math.exp(-Math.max(0, k) * (t - t0)));
  return clamp01(v);
}

/**
 * Optional helper: fit Gompertz (k, t0) from two anchors.
 * Requires 0 < p0, p1 < L.
 */
export function fitGompertzFromAnchors(
  p0: number,           // PIST at t=0
  p1: number,           // PIST at t=t1
  t1: number,           // > 0
  L: number             // ceiling
): { k: number; t0: number } | null {
  const eps = 1e-9;
  if (!(t1 > 0)) return null;
  if (!(L > 0)) return null;

  const r0 = p0 / L;
  const r1 = p1 / L;
  if (r0 <= 0 + eps || r0 >= 1 - eps || r1 <= 0 + eps || r1 >= 1 - eps) return null;

  // y = ln(-ln(P/L)) = -k t + k t0  (linear in t)
  const y0 = Math.log(-Math.log(r0));
  const y1 = Math.log(-Math.log(r1));

  const m = (y1 - y0) / t1; // slope = -k
  const k = -m;
  if (!(k > 0)) return null;

  const b = y0;            // intercept = k t0
  const t0 = b / k;

  return Number.isFinite(k) && Number.isFinite(t0) ? { k, t0 } : null;
}
