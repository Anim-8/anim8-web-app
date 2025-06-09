import type { LabelValuePair } from "./LableValuePair";

interface Section {
    title: string;
    subtitle: string;
    description: string;
    items: LabelValuePair[];
}

export type { Section }