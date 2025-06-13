import type { BaseSection } from "../../../models/common/Section";
import CortexCrewVisual from "./visuals/CortexCrewVisual";
import WhyVisual from "./visuals/WhyVisual";


export const productSections: BaseSection[] = [
  {
    title: "Implementation",
    subtitle: "From Ramp to Autonomy",
    description:
      "Cortex isn't installed — it evolves. Our implementation strategy reflects this transformation, guiding factories from hands-on integration to full self-regulation.",
    variant: "stacked",
    subtitleColor: "--color-cyan-400",
    overlayColor: "from-indigo-900/30 to-black",
    items: [
      {
        title: "Ramp Phase",
        emoji: "🛠️",
        description:
          "During ramp, Anim8 engineers work shoulder-to-shoulder with your team. Together we tune logic, build workflows, and dial in every interaction."
      },
      {
        title: "Stabilization",
        emoji: "⚙️",
        description:
          "As Cortex stabilizes, the spotlight shifts. Client engineers take more control, our team fades back. The system starts to breathe on its own."
      },
      {
        title: "Autonomy",
        emoji: "🧠",
        description:
          "Cortex now predicts and adapts. Operators monitor instead of intervene. It’s not just software anymore — it’s your factory’s second brain."
      }
    ]
  },
  {
    title: "The Cortex Crew",
    subtitle: "Who Builds the Brain?",
    variant: "paragraph",
    visualSlot: <CortexCrewVisual />,
    subtitleColor: "--color-cyan-400",
    overlayColor: "from-indigo-900/30 to-black",
    items: [
      {
        label: "1",
        value:
          "Cortex isn’t a self-install. It’s a co-creation. Our data engineers come from the factory floor."
      },
      {
        label: "2",
        value:
          "We speak the language of torque curves, station cycle time, and stack-up variation. We don’t just code. We understand manufacturing at its core."
      },
      {
        label: "3",
        value:
          "We’re not just devs — we’re builders. Cortex exists because we built it with you, not for you."
      }
    ]
  },
  {
    title: "Why It Works",
    subtitle: "A System Built on First Principles",
    description: "Cortex is engineered, not configured. Our foundation is not trend, but principle. Every decision in our system flows from physics, data, and logic.",
    visualSlot: <WhyVisual />,
    subtitleColor: "--color-cyan-400",
    overlayColor: "from-indigo-900/30 to-black",
    variant: "list",
    items: [
      {
        label: "Physics-based root cause logic",
        value:
          "We trace issues to their physical origin — not symptoms."
      },
      {
        label: "Unbiased tech stack",
        value:
          "No vendor lock-in. We choose the right tool for the job every time."
      },
      {
        label: "Statistical & empirical methods",
        value:
          "Built-in rigor to validate outcomes and decisions."
      },
      {
        label: "Polyglot data handling",
        value:
          "Seamless fusion of structured, semi-structured, and unstructured data, continuously improved."
      }
    ]
  }
]

export default productSections