export interface RichContentDefinition {
  term: string;
  description: string;
}

export interface RichContentImage {
  url: string;
  alt: string;
}

export interface RichContentBlock {
  type: "paragraph" | "list" | "orderedList" | "definitionList" | "gallery";
  text?: string;
  items?: string[];
  definitions?: RichContentDefinition[];
  images?: RichContentImage[];
}
