import type { LabelValuePair } from "./LableValuePair";

type SectionVariant = "list" | "stacked" | "cards" | "paragraph" | "simple-card" | undefined

type CardItem =
    | { title: string; description: string }
    | { label: string; value: string }
    | { title: string; emoji: string; description: string; }

interface T {
    title: string;
    visualSlot?: React.ReactNode
    description?: string;
    overlayColor: string | null;
    subtitleColor: string;
}

interface BaseSection extends T {
    subtitle: string;
    variant: SectionVariant;
    modalText?: string;
    primaryTitleColor?: string;
    items: CardItem[];
}

interface PhilosophySection extends T {
    items: LabelValuePair[];
    footer?: string
    itemTitle?: string
}

export type { SectionVariant, CardItem, BaseSection, PhilosophySection }