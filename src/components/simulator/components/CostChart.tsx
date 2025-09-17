import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from "recharts";
import { Scenario, SeriesPoint } from "../types";

type Props = {
  data: SeriesPoint[];
  scenarios: Scenario[];
};

export default function CostChart({ data, scenarios }: Props) {
  const enabled = scenarios.filter(s => s.enabled);

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-3">Cumulative Dollar Impact (Rework + Lost Sales), $M</h4>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 8, right: 12, left: 12, bottom: 32 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="year" stroke="#9ca3af">
            <Label value="Time (years)" position="insideBottom" offset={-5} fill="#9ca3af" />
          </XAxis>
          <YAxis stroke="#9ca3af">
            <Label value="$ Millions" angle={-90} position="insideLeft" offset={10} fill="#9ca3af" />
          </YAxis>
          <Tooltip
            contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)" }}
            labelFormatter={(v) => `Year ${v}`}
            formatter={(val: any, name: string) => [`$${Number(val).toFixed(2)}M`, name.replace("Cost_", "Scenario ")]}
          />
          <Legend />
          {enabled.map((s) => (
            <Line
              key={s.id}
              type="monotone"
              dataKey={`Cost_${s.id}`}
              stroke={s.color}
              strokeWidth={3}
              dot={false}
              name={s.label}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 mt-2">
        Lower curves are better (less cumulative cost). Faster/higher PIST protects launch throughput and reduces rework spend earlier.
      </p>
    </div>
  );
}
