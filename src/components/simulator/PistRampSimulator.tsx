import React, { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import SimulatorCTA from "../../components/ui/SimulatorCTA";

/** -----------------------------
 *  Types & helpers
 *  ----------------------------*/
type RampModel = "gompertz" | "logistic" | "modified-exp";

type Scenario = {
  id: string;
  label: string;
  color: string;
  enabled: boolean;
  model: RampModel;
  L: number;    // Max PIST attainable (0..1)
  p0: number;   // Initial PIST at t=0 (0..1)
  k: number;    // Learning rate (>0)
};

type Econ = {
  horizonYears: number;       // total time horizon (years)
  dtYears: number;            // step (years)
  maxDefectRate: number;      // when PIST≈0 (fraction 0..1)
  productionPerMonth: number; // units
  costPerDefect: number;      // $
  defectCapacityHit: number;  // units capacity lost per defect
  weeklyDemand: number;       // units/week
  contributionMargin: number; // $/unit
};

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

function pist(model: RampModel, t: number, L: number, k: number, p0: number, t0 = 0.4) {
  if (model === "modified-exp") {
    return Math.min(L, Math.max(0, L - (L - p0) * Math.exp(-k * t)));
  }
  if (model === "logistic") {
    const v = L / (1 + Math.exp(-k * (t - t0)));
    return clamp01(v);
  }
  // gompertz
  const v = L * Math.exp(-Math.exp(-k * (t - t0)));
  return clamp01(v);
}

function dollarsForStep(
  PIST: number,
  econ: Econ,
  monthsInStep: number,
  weeksInStep: number
) {
  // Simple mapping: defect rate falls linearly with PIST
  const dr = Math.max(0, econ.maxDefectRate * (1 - PIST)); // fraction
  const produced = econ.productionPerMonth * monthsInStep;
  const defects = dr * produced;

  const reworkCost = defects * econ.costPerDefect;

  const lostUnits = defects * econ.defectCapacityHit;
  const demand = econ.weeklyDemand * weeksInStep;
  const shipped = Math.max(0, Math.min(produced - lostUnits, demand));
  const lostSales = Math.max(0, demand - shipped) * econ.contributionMargin;

  return {
    defects,
    dr,
    reworkCost,
    lostSales,
    total: reworkCost + lostSales,
  };
}

/** -----------------------------
 *  Defaults
 *  ----------------------------*/
const DEFAULT_SCENARIOS: Scenario[] = [
  { id: "A", label: "Scenario A", color: "#60a5fa", enabled: true,  model: "gompertz",     L: 0.85, p0: 0.15, k: 4.5 },
  { id: "B", label: "Scenario B", color: "#f87171", enabled: true,  model: "modified-exp", L: 0.65, p0: 0.15, k: 1.8 },
  { id: "C", label: "Scenario C", color: "#22c55e", enabled: false, model: "logistic",     L: 0.75, p0: 0.10, k: 2.5 },
];

const ECON_DEFAULTS: Econ = {
  horizonYears: 5,
  dtYears: 0.1,
  maxDefectRate: 0.06,
  productionPerMonth: 15000,
  costPerDefect: 350,
  defectCapacityHit: 0.15,
  weeklyDemand: 3500,
  contributionMargin: 11500,
};

/** -----------------------------
 *  Component
 *  ----------------------------*/
export default function PistRampSimulator() {
  const [scenarios, setScenarios] = useState<Scenario[]>(DEFAULT_SCENARIOS);
  const [econ, setEcon] = useState<Econ>(ECON_DEFAULTS);
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);

  const monthsInStep = useMemo(() => 12 * econ.dtYears, [econ.dtYears]);
  const weeksInStep  = useMemo(() => 52 * econ.dtYears, [econ.dtYears]);

  // Compute series for charting and summary
  const { series, summary } = useMemo(() => {
    const tMax = econ.horizonYears;
    const tStep = Math.max(0.02, Math.min(1, econ.dtYears)); // keep sane dt range

    const rows: any[] = [];
    const cumulative: Record<string, number> = {};
    const summaries: Record<string, { cumM: number; finalPIST: number }> = {};

    for (const s of scenarios) cumulative[s.id] = 0;

    for (let t = 0; t <= tMax + 1e-9; t += tStep) {
      const row: any = { year: +t.toFixed(2) };

      for (const s of scenarios) {
        if (!s.enabled) continue;

        const P = pist(s.model, t, s.L, s.k, s.p0);
        const econStep = dollarsForStep(P, econ, monthsInStep, weeksInStep);
        cumulative[s.id] += econStep.total;

        row[`PIST_${s.id}`] = P * 100;
        row[`Cost_${s.id}`] = cumulative[s.id] / 1e6; // $M cumulative

        if (Math.abs(t - tMax) < 1e-9) {
          summaries[s.id] = {
            cumM: cumulative[s.id] / 1e6,
            finalPIST: P * 100,
          };
        }
      }
      rows.push(row);
    }

    return { series: rows, summary: summaries };
  }, [scenarios, econ, monthsInStep, weeksInStep]);

  const updateScenario = (id: string, patch: Partial<Scenario>) => {
    setScenarios(prev => prev.map(s => (s.id === id ? { ...s, ...patch } : s)));
  };

  const updateEcon = (patch: Partial<Econ>) => {
    setEcon(prev => ({ ...prev, ...patch }));
  };

  const resetAssumptions = () => setEcon(ECON_DEFAULTS);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-white">
      {/* Header & guidance */}
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">PIST Ramp Simulator</h1>
        <p className="text-gray-300 max-w-3xl">
          Compare up to <strong>three ramp scenarios</strong> and see the
          <strong> cumulative dollar impact</strong> as your Process Integrity/Determinism (PIST) improves over time.
          Pick a ramp law, set your <em>Max PIST</em>, <em>Initial PIST</em>, and <em>Learning Rate</em>. The charts show
          both the PIST ramp and a cumulative $ curve that combines rework cost and launch-phase lost revenue from
          capacity hits.
        </p>
      </div>

      {/* CTA disclaimer (marketing copy) */}
      <div className="mb-8 rounded-xl border border-amber-300/30 bg-amber-500/10 px-4 py-4">
        <p className="text-amber-200 text-sm leading-relaxed">
          <strong>Heads up:</strong> This simulator is meant for <em>rough estimation</em> and order-of-magnitude insights on
          the savings tied to your dimensional ramp. If you want to accurately estimate this dollar amount and understand
          the deeper mechanics of how PIST is tied to actual dollar outcomes, reach out to us. Also, if you want to know
          how to model the average cost per defect for your assembly, feel free to get in touch.
        </p>
        <div className="mt-3">
          <SimulatorCTA
            label="Talk to us"
            ariaLabel="Contact Anim8 about precise ROI modeling"
            href="/contact"
            variant="solid"
            size="sm"
          />
        </div>
      </div>

      {/* Assumptions (now editable) */}
      <div className="mb-8 rounded-xl border border-white/10 bg-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="font-semibold">Assumptions</h2>
          <button
            onClick={() => setAssumptionsOpen(v => !v)}
            className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            {assumptionsOpen ? "Hide" : "Edit"}
          </button>
        </div>
        {assumptionsOpen && (
          <div className="px-4 pb-4">
            <div className="grid md:grid-cols-4 gap-4">
              <NumberField
                label="Horizon (years)"
                value={econ.horizonYears}
                step={0.5}
                min={1}
                onChange={(v)=>updateEcon({ horizonYears: v })}
              />
              <NumberField
                label="Δt (years/step)"
                value={econ.dtYears}
                step={0.05}
                min={0.02}
                max={1}
                onChange={(v)=>updateEcon({ dtYears: v })}
              />
              <NumberField
                label="Max Defect Rate (0–1)"
                value={econ.maxDefectRate}
                step={0.001}
                min={0}
                max={1}
                onChange={(v)=>updateEcon({ maxDefectRate: v })}
              />
              <NumberField
                label="Production / Month (units)"
                value={econ.productionPerMonth}
                step={500}
                min={0}
                onChange={(v)=>updateEcon({ productionPerMonth: v })}
              />
              <NumberField
                label="Cost per Defect ($)"
                value={econ.costPerDefect}
                step={50}
                min={0}
                onChange={(v)=>updateEcon({ costPerDefect: v })}
              />
              <NumberField
                label="Units Lost per Defect"
                value={econ.defectCapacityHit}
                step={0.01}
                min={0}
                onChange={(v)=>updateEcon({ defectCapacityHit: v })}
              />
              <NumberField
                label="Weekly Demand (units)"
                value={econ.weeklyDemand}
                step={100}
                min={0}
                onChange={(v)=>updateEcon({ weeklyDemand: v })}
              />
              <NumberField
                label="Contribution Margin ($/unit)"
                value={econ.contributionMargin}
                step={250}
                min={0}
                onChange={(v)=>updateEcon({ contributionMargin: v })}
              />
            </div>
            <div className="mt-4">
              <button
                onClick={resetAssumptions}
                className="text-xs text-gray-300 hover:text-white underline"
              >
                Reset to defaults
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scenario controls */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {scenarios.map((s) => (
          <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: s.color }} />
                <h3 className="font-semibold">{s.label}</h3>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={s.enabled}
                  onChange={(e) => updateScenario(s.id, { enabled: e.target.checked })}
                />
                <span className="text-gray-300">Enable</span>
              </label>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Ramp Function</label>
                <select
                  className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2"
                  value={s.model}
                  onChange={(e) => updateScenario(s.id, { model: e.target.value as RampModel })}
                >
                  <option value="gompertz">Gompertz (fast start, long tail)</option>
                  <option value="logistic">Logistic (symmetric S-curve)</option>
                  <option value="modified-exp">Modified Exponential (first-order)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <NumberField
                  label="Max PIST (0–1)"
                  value={s.L}
                  step={0.01}
                  min={0}
                  max={1}
                  onChange={(v)=>updateScenario(s.id, { L: clamp01(v) })}
                />
                <NumberField
                  label="Initial PIST (0–1)"
                  value={s.p0}
                  step={0.01}
                  min={0}
                  max={1}
                  onChange={(v)=>updateScenario(s.id, { p0: clamp01(v) })}
                />
              </div>

              <NumberField
                label="Learning Rate (k > 0)"
                value={s.k}
                step={0.1}
                min={0.1}
                onChange={(v)=>updateScenario(s.id, { k: Math.max(0.1, v) })}
              />
            </div>
          </div>
        ))}
      </div>

      {/* PIST curves */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-3">PIST Ramp Over Time</h4>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={series}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis 
            dataKey="year" 
            stroke="#9ca3af"
            />
            <YAxis stroke="#9ca3af" domain={[0, 100]} label={{ value: "PIST (%)", angle: -90, position: "insideLeft", fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)" }}
              labelFormatter={(v) => `Year ${v}`}
              formatter={(val: any, name: string) => [`${(Number(val)).toFixed(1)}%`, name.replace("PIST_", "Scenario ")]}
            />
            <Legend />
            {scenarios.filter(s => s.enabled).map((s) => (
              <Line
                key={s.id}
                type="monotone"
                dataKey={`PIST_${s.id}`}
                stroke={s.color}
                strokeWidth={3}
                dot={false}
                name={`${s.label}`}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Dollar impact */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-3">Cumulative Dollar Impact (Rework + Lost Sales), $M</h4>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={series}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="year" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" label={{ value: "$ Millions", angle: -90, position: "insideLeft", fill: "#9ca3af" }} />
            <Tooltip
              contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)" }}
              labelFormatter={(v) => `Year ${v}`}
              formatter={(val: any, name: string) => [`$${Number(val).toFixed(2)}M`, name.replace("Cost_", "Scenario ")]}
            />
            <Legend />
            {scenarios.filter(s => s.enabled).map((s) => (
              <Line
                key={s.id}
                type="monotone"
                dataKey={`Cost_${s.id}`}
                stroke={s.color}
                strokeWidth={3}
                dot={false}
                name={`${s.label}`}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 mt-2">
          Lower curves are better (less cumulative cost). Faster/ higher PIST scenarios protect launch throughput and reduce rework spend earlier.
        </p>
      </div>

      {/* Summary table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-white/10 rounded-lg overflow-hidden">
          <thead className="bg-white/5">
            <tr className="text-left">
              <th className="px-4 py-3">Scenario</th>
              <th className="px-4 py-3">Ramp</th>
              <th className="px-4 py-3">Max PIST</th>
              <th className="px-4 py-3">Initial PIST</th>
              <th className="px-4 py-3">Learning k</th>
              <th className="px-4 py-3">Year {econ.horizonYears} PIST</th>
              <th className="px-4 py-3">{econ.horizonYears}-Year Cost ($M)</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.filter(s => s.enabled).map((s) => (
              <tr key={s.id} className="border-t border-white/10">
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </span>
                </td>
                <td className="px-4 py-3 capitalize">{s.model.replace("-", " ")}</td>
                <td className="px-4 py-3">{s.L.toFixed(2)}</td>
                <td className="px-4 py-3">{s.p0.toFixed(2)}</td>
                <td className="px-4 py-3">{s.k.toFixed(2)}</td>
                <td className="px-4 py-3">{summary[s.id]?.finalPIST.toFixed(1)}%</td>
                <td className="px-4 py-3">${summary[s.id]?.cumM.toFixed(2)}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Small reusable number field */
function NumberField({
  label, value, onChange, step = 1, min, max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2"
      />
    </div>
  );
}
