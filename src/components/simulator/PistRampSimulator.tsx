import { useMemo, useState } from "react";
import { Scenario, Econ } from "../../simulator/core/types";
import { ECON_DEFAULTS } from "../../simulator/core/economics";
import { computeSeries } from "../../simulator/core/series";
import AssumptionsPanel from "../../simulator/components/AssumptionsPanel";
import ScenarioCard from "../../simulator/components/ScenarioCard";
import PISTChart from "../../simulator/components/PISTChart";
import CostChart from "../../simulator/components/CostChart";
import SummaryTable from "../../simulator/components/SummaryTable";
import SimulatorCTA from "../../components/ui/SimulatorCTA";


/** -----------------------------
 *  Defaults
 *  ----------------------------*/
const DEFAULT_SCENARIOS: Scenario[] = [
    { id: "A", label: "Scenario A", color: "#60a5fa", enabled: true, model: "gompertz", L: 0.85, p0: 0.15, k: 4.5 },
    { id: "B", label: "Scenario B", color: "#f87171", enabled: true, model: "modified-exp", L: 0.65, p0: 0.15, k: 1.8 },
    { id: "C", label: "Scenario C", color: "#22c55e", enabled: false, model: "logistic", L: 0.75, p0: 0.10, k: 2.5 },
];

/** -----------------------------
 *  Component
 *  ----------------------------*/
export default function PistRampSimulator() {
    const [scenarios, setScenarios] = useState<Scenario[]>(DEFAULT_SCENARIOS);
    const [econ, setEcon] = useState<Econ>(ECON_DEFAULTS);

    // Compute series for charting and summary
    const { series, summary } = useMemo(
        () => computeSeries(scenarios, econ),
        [scenarios, econ]
    );

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

            {/* Assumptions */}
            <AssumptionsPanel econ={econ} onChange={(patch) => setEcon(p => ({ ...p, ...patch }))}
                onReset={() => setEcon(ECON_DEFAULTS)} defaultOpen={false} />

            {/* Scenario controls */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                {scenarios.map(s => (
                    <ScenarioCard key={s.id} scenario={s}
                        onChange={(id, patch) => setScenarios(prev => prev.map(x => x.id === id ? { ...x, ...patch } : x))} />
                ))}
            </div>

            {/* PIST curves */}
            <PISTChart data={series} scenarios={scenarios} />

            {/* Dollar impact */}
            <CostChart data={series} scenarios={scenarios} />

            {/* Summary table */}
            <SummaryTable scenarios={scenarios} summary={summary} horizonYears={econ.horizonYears} />

        </div>
    );
}
