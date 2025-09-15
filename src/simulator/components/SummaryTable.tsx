import React from "react";
import { Scenario, Summary } from "../core/types";

type Props = {
  scenarios: Scenario[];
  summary: Summary;
  horizonYears: number;
};

export default function SummaryTable({ scenarios, summary, horizonYears }: Props) {
  const enabled = scenarios.filter(s => s.enabled);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-white/10 rounded-lg overflow-hidden">
        <thead className="bg-white/5">
          <tr className="text-left">
            <th className="px-4 py-3">Scenario</th>
            <th className="px-4 py-3">Ramp</th>
            <th className="px-4 py-3">Max PIST</th>
            <th className="px-4 py-3">Initial PIST</th>
            <th className="px-4 py-3">Learning k</th>
            <th className="px-4 py-3">Year {horizonYears} PIST</th>
            <th className="px-4 py-3">{horizonYears}-Year Cost ($M)</th>
          </tr>
        </thead>
        <tbody>
          {enabled.map((s) => (
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
  );
}
