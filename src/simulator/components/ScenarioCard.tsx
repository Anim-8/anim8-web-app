import React from "react";
import { RampModel, Scenario } from "../core/types";
import NumberField from "./fields/NumberField";
import SelectField, { Option } from "./fields/SelectField";

const RAMP_OPTIONS: Option<RampModel>[] = [
  { value: "gompertz",     label: "Gompertz (fast start, long tail)" },
  { value: "logistic",     label: "Logistic (symmetric S-curve)" },
  { value: "modified-exp", label: "Modified Exponential (first-order)" },
];

type Props = {
  scenario: Scenario;
  onChange: (id: string, patch: Partial<Scenario>) => void;
};

export default function ScenarioCard({ scenario, onChange }: Props) {
  const s = scenario;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full" style={{ background: s.color }} />
          <h3 className="font-semibold">{s.label}</h3>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={s.enabled}
            onChange={(e) => onChange(s.id, { enabled: e.target.checked })}
          />
          <span className="text-gray-300">Enable</span>
        </label>
      </div>

      <div className="space-y-3">
        <SelectField
          label="Ramp Function"
          value={s.model}
          options={RAMP_OPTIONS}
          onChange={(v)=>onChange(s.id, { model: v })}
        />

        <div className="grid grid-cols-2 gap-3">
          <NumberField
            label="Max PIST (0–1)"
            value={s.L}
            step={0.01}
            min={0}
            max={1}
            onChange={(v)=>onChange(s.id, { L: Math.max(0, Math.min(1, v)) })}
          />
          <NumberField
            label="Initial PIST (0–1)"
            value={s.p0}
            step={0.01}
            min={0}
            max={1}
            onChange={(v)=>onChange(s.id, { p0: Math.max(0, Math.min(1, v)) })}
          />
        </div>

        <NumberField
          label="Learning Rate (k > 0)"
          value={s.k}
          step={0.1}
          min={0.1}
          onChange={(v)=>onChange(s.id, { k: Math.max(0.1, v) })}
        />
      </div>
    </div>
  );
}
