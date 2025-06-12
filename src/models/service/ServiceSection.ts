import type { LabelValuePair } from "../common/LableValuePair";

type SectionVariant = "list" | "stacked" | "cards" | "paragraph"

interface ServiceSection {
    title: string;
    subtitle: string;
    description: string;
    items: LabelValuePair[];
    variant?: SectionVariant
    visualSlot?: React.ReactNode;
}

export type { ServiceSection, SectionVariant }