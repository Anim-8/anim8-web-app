import type { SectionVariant } from "../service/ServiceSection";

type CardItem =
  | { title: string; description: string }
  | { label: string; value: string };

interface BaseSection {
  title: string;
  subtitle: string;
  description: string;
  variant: SectionVariant;
  modalText?: string;
  primaryTitleColor?: string;
  items: CardItem[];
  visualSlot?: React.ReactNode
}

export type { CardItem, BaseSection }