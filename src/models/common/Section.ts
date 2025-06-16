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
    textCenter?: boolean
}

interface BaseSection extends T {
    subtitle: string;
    variant: SectionVariant;
    modalText?: string;
    primaryTitleColor?: string;
    items: CardItem[];
    itemFooter?: boolean // this is when items should display under the description while also containing a visual
}

interface PhilosophySection extends T {
    items: LabelValuePair[];
    footer?: string
    itemTitle?: string
}

export type { SectionVariant, CardItem, BaseSection, PhilosophySection }