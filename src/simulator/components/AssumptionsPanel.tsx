import React, { useState } from "react";
import { Econ } from "../core/types";
import NumberField from "./fields/NumberField";

type Props = {
  econ: Econ;
  onChange: (patch: Partial<Econ>) => void;
  onReset: () => void;
  defaultOpen?: boolean;
  title?: string;
};

export default function AssumptionsPanel({
  econ, onChange, onReset, defaultOpen = false, title = "Assumptions",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-8 rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="font-semibold">{title}</h2>
        <button
          onClick={() => setOpen(v => !v)}
          className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          {open ? "Hide" : "Edit"}
        </button>
      </div>

      {open && (
        <div className="px-4 pb-4">
          <div className="grid md:grid-cols-4 gap-4">
            <NumberField label="Horizon (years)" value={econ.horizonYears} step={0.5} min={1}
              onChange={(v)=>onChange({ horizonYears: v })}/>
            <NumberField label="Δt (years/step)" value={econ.dtYears} step={0.05} min={0.02} max={1}
              onChange={(v)=>onChange({ dtYears: v })}/>
            <NumberField label="Max Defect Rate (0–1)" value={econ.maxDefectRate} step={0.001} min={0} max={1}
              onChange={(v)=>onChange({ maxDefectRate: v })}/>
            <NumberField label="Production / Month (units)" value={econ.productionPerMonth} step={500} min={0}
              onChange={(v)=>onChange({ productionPerMonth: v })}/>
            <NumberField label="Cost per Defect ($)" value={econ.costPerDefect} step={50} min={0}
              onChange={(v)=>onChange({ costPerDefect: v })}/>
            <NumberField label="Units Lost per Defect" value={econ.defectCapacityHit} step={0.01} min={0}
              onChange={(v)=>onChange({ defectCapacityHit: v })}/>
            <NumberField label="Weekly Demand (units)" value={econ.weeklyDemand} step={100} min={0}
              onChange={(v)=>onChange({ weeklyDemand: v })}/>
            <NumberField label="Contribution Margin ($/unit)" value={econ.contributionMargin} step={250} min={0}
              onChange={(v)=>onChange({ contributionMargin: v })}/>
          </div>
          <div className="mt-4">
            <button onClick={onReset} className="text-xs text-gray-300 hover:text-white underline">
              Reset to defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
