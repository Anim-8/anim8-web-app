import type { SectionVariant } from "../service/ServiceSection";
import type { LabelValuePair } from "./LableValuePair";

type CardItem =
    | { title: string; description: string }
    | { label: string; value: string }
    | { title: string; emoji: string; description: string; }

interface T {
    title: string;
    visualSlot?: React.ReactNode
    description?: string;
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

export type { CardItem, BaseSection, PhilosophySection }