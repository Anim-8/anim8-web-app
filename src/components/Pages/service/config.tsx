import type { BaseSection } from "../../../models/common/Section";
import DifferentiatorVisual from "./visuals/DifferentiatorVisual";
import EvolveVisual from "./visuals/EvolveVisual";

export const serviceSections: BaseSection[] = [
    {
        title: "The Diagnostic",
        subtitle: "Your Enterprise MRI",
        description:
            "Every transformation starts with clarity. Our Diagnostic is a deep, systemic evaluation of your manufacturing ecosystem — from design to data. We map your position across the (Animation Spectrum (Manual → Automated → Animated) and generate a precise roadmap for evolution.",
        variant: "simple-card",
        overlayColor: null,
        subtitleColor: "cyan",
        items: [
            {
                title: "Animation Spectrum Report:",
                description: "Assess current operational maturity."
            },
            {
                title: "Brain-Body Mapping:",
                description:
                    "Identify disconnects between equipment and digital systems."
            },
            {
                title: "System Bottleneck Analysis:",
                description: "Highlight inefficiencies and performance traps."
            },
            {
                title: "Budget + ROI Forecast:",
                description: "Deliver a financial blueprint for transformation."
            }
        ]
    },
    {
        title: "Custom Software Design & Integration",
        subtitle: "The Digital Nervous System",
        description:
            "Your factory isn't generic — neither should your software be. We design and build fully custom applications that connect your machines, people, and data into a cohesive digital architecture tailored for evolution. This is where integration meets intelligence.",
        variant: "cards",
        overlayColor: "from-indigo-900/30 to-black",
        subtitleColor: "indigo",
        items: [
            {
                label: "Custom Interfaces:",
                value: "Build tools that fit your workflow, not the other way around."
            },
            {
                label: "AI-Powered Logic:",
                value:
                    "Automate decisions, detect patterns, and accelerate insight loops."
            },
            {
                label: "System Bridges:",
                value:
                    "Seamlessly connect legacy tools, sensors, MES, ERP, and more."
            },
            {
                label: "Data Infrastructure:",
                value:
                    "Lay the foundation for secure, scalable, cross-site intelligence."
            }
        ]
    },
    {
        title: "Specialized Dimensional Services",
        subtitle: "Metrology That Matters",
        description:
            "Precision isn't optional — it's foundational. Our metrology experts bring Tesla-caliber rigor to your most critical production challenges. From measurement planning to turnkey system design, we create clarity in complexity and ensure your dimensional integrity is never left to chance.",
        variant: "cards",
        primaryTitleColor: "text-emerald-300",
        overlayColor: "from-emerald-900/30 to-black",
        subtitleColor: "emerald",
        items: [
            {
                label: "Measurement Plan Design:",
                value:
                    "Build robust plans aligned with product intent and GD&T standards."
            },
            {
                label: "Turnkey Metrology Systems:",
                value:
                    "From sensor selection to full implementation and commissioning."
            },
            {
                label: "GD&T and Tolerance Analysis:",
                value:
                    "Identify critical interfaces, stack-ups, and inspection strategies."
            },
            {
                label: "Dimensional Monitoring & Analytics:",
                value:
                    "Integrate live feedback loops into your control systems via Cortex."
            }
        ]
    },
    {
        title: "Continuous Evolution",
        subtitle: "Built to Evolve",
        description:
            "We don't deliver static tools — we commission living systems. Our engagements are designedto scale, adapt, and improve with every cycle. With Cortex at the core, we embed your enterprise in a self-reinforcing loop of learning, performance, and transformation.",
        variant: "cards",
        modalText: "helloworld",
        visualSlot: <EvolveVisual />,
        overlayColor: "from-lime-800/30 to-black",
        subtitleColor: "lime",
        items: [
            {
                label: "Cyclical Methodology:",
                value:
                    "Diagnostic → Design → Implementation → Feedback → Evolution."
            },
            {
                label: "Self-Improving Logic:",
                value:
                    "Cortex refines itself using historical and live data to close the loop."
            },
            {
                label: "Performance Dashboards:",
                value: "Monitor KPIs, drift, and anomalies to tune continuously."
            },
            {
                label: "Partnership Model:",
                value:
                    "We grow with you — from first pilot to full-scale autonomy."
            }
        ]
    },
    {
        title: "Cortex Integration",
        subtitle: "Your Brain, Our Framework",
        description:
            "Cortex is the digital brain of your operation — a custom-tailored framework that brings perception, memory, and decision-making into one intelligent system. It unifies your sensors, machines, and people through a responsive architecture that evolves with you.",
        variant: "simple-card",
        modalText: "helloworld",
        primaryTitleColor: "text-indigo-300",
        overlayColor: "from-indigo-800/30 to-black",
        subtitleColor: "indigo",
        items: [
            {
                title: "Modular Architecture:",
                description: "Connect only what you need — scale when ready."
            },
            {
                title: "Live Data Streams:",
                description:
                    "Visualize real-time dimensional, process, and production data."
            },
            {
                title: "Integrated Logic Engine:",
                description:
                    "Automate feedback loops and cross-layer decision-making."
            },
            {
                title: "Factory Consciousness:",
                description:
                    "Make your system self-aware — ready to adapt, learn, and improve."
            }
        ]
    },
    {
        title: "Why Anim8",
        subtitle: "This Is a Different Kind of Partnership",
        description:
            "Anim8 is not a vendor. We're your system co-architect, diagnostic partner, and long-term evolution guide. What makes Anim8 different is not just what we build — it's how we think, how we collaborate, and how we commit to your transformation.",
        variant: "cards",
        overlayColor: "from-fuchsia-900/30 to-black",
        visualSlot: <DifferentiatorVisual />,
        subtitleColor: "fuchsia",
        items: [
            {
                label: "Technology-Agnostic",
                value:
                    "We choose what's best for your ROI — not our resale margin."
            },
            {
                label: "Tesla-Proven Expertise",
                value:
                    "We’ve led transformation from concept to execution on the world stage."
            },
            {
                label: "First-Principles Logic",
                value:
                    "Every decision is rooted in physics, data, and system thinking."
            },
            {
                label: "Emotional Intelligence",
                value:
                    "We design with human operators, not just machines, in mind."
            }
        ]
    }
];

export default serviceSections