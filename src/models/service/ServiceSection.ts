import type { LabelValuePair } from "../common/LableValuePair";

interface ServiceSection {
    title: string;
    subtitle: string;
    description: string;
    items: LabelValuePair[];
}

export type { ServiceSection }