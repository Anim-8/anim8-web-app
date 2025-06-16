import type { PhilosophySection } from "../../../models/common/Section";
import AnimationSpectrumVisual from "./visuals/AnimationSpectrumVisual";
import BrainBodyVisual from "./visuals/BrainBodyVisual";
<<<<<<< HEAD
import KaizenVisual from "./visuals/KaizenVisual";
=======
import ContinuosImprovementVisual from "./visuals/ContinuosImprovementVisual";
import EvolutionVisual from "./visuals/EvolutionVisual";
>>>>>>> 3970d3ceb99be91ad6de7cec6c2cfe0c091d7a2f


export const philosophySections: PhilosophySection[] = [
  {
    title: "The Brain & Body Analogy",
    description:
      "Just like the human body relies on both a nervous system and a brain, an enterprise needs both physical assets and cognitive control.",
    footer:
      "Evolution happens when these two realms connect — when a system begins to sense, interpret, and act with intelligence.",
    itemTitle: "In our model:",
    visualSlot: <BrainBodyVisual />,
    subtitleColor: "--color-cyan-400",
    overlayColor: "from-indigo-900/30 to-black",
    items: [
      {
        label: "The Body",
        value: "Represents machines, sensors, and infrastructure."
      },
      {
        label: "The Brain",
        value:
          "Is composed of data logic, orchestration, and learning systems."
      }
    ]
  },
  {
    title: "The Animation Spectrum",
    description:
      "Every enterprise lives somewhere along a spectrum of evolution. From manual repetition to autonomous adaptation — this journey defines the trajectory of manufacturing intelligence.",
    footer:
      "Our goal is to move every client toward animation — a state where systems come alive.",
    itemTitle: "We classify systems across three states:",
    visualSlot: <AnimationSpectrumVisual />,
    subtitleColor: "--color-cyan-400",
    overlayColor: "from-blue-800/30 to-black",
    items: [
      {
        label: "Manual",
        value: "Repetitive tasks, poor data flow, high friction."
      },
      {
        label: "Automated",
        value: "Streamlined operations, connected tools, better decisions."
      },
      {
        label: "Animated",
        value: "Self-aware, predictive, evolving systems."
      }
    ]
  },
  {
    title: "The Continuous Evolution Loop",
    description:
      "Transformation isn't a straight line — it's a loop. Our process reflects the rhythm of nature: observe, act, reflect, adapt.",
    footer: "This loop doesn't end — because evolution doesn't either.",
    itemTitle: "Every project we lead cycles through:",
<<<<<<< HEAD
    visualSlot: <KaizenVisual/>,
=======
    visualSlot: <ContinuosImprovementVisual />,
>>>>>>> 3970d3ceb99be91ad6de7cec6c2cfe0c091d7a2f
    subtitleColor: "--color-green-800/30",
    overlayColor: "from-green-800/30 to-black",
    items: [
      {
        label: "Diagnostic",
        value: "Reveal the truth."
      },
      {
        label: "Design",
        value: "Architect intentional systems."
      },
      {
        label: "Integration",
        value: "Fuse the brain with the body."
      },
      {
        label: "Feedback",
        value: "Measure, evaluate, refine."
      },
      {
        label: "Adaptation",
        value: "Evolve and repeat."
      }
    ]
  },
  {
    title: "The Ecosystem",
    description: "The manufacturing problem is too vast for any single player to solve. That’s why we’re building an ecosystem — a merit-based alliance of specialized solution providers working together to tackle the industry's most complex challenges. Anim8 acts as the living interface between advanced technology creators and the manufacturing world — translating frontier tech into practical industrial transformation.",
    visualSlot: <EvolutionVisual />,
    subtitleColor: "--color-indigo-800/30",
    overlayColor: "from-cyan-800/30 to-black",
    textCenter: true,
    items: []
  }
];

export default philosophySections