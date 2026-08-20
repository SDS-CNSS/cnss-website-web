export interface RichContentDefinition {
  term: string;
  description: string;
}

export interface RichContentImage {
  url: string;
  alt: string;
}

export interface RichContentListItem {
  label?: string;
  text: string;
  href?: string;
}

export interface RichContentDocument {
  title: string;
  url: string;
  fileName: string;
  extensionLabel: string;
  sizeLabel: string;
  mimeType: string;
}

export interface RichContentBlock {
  type: "paragraph" | "list" | "orderedList" | "definitionList" | "gallery" | "paragraphWithLink" | "document";
  text?: string;
  items?: (string | RichContentListItem)[];
  definitions?: RichContentDefinition[];
  images?: RichContentImage[];
  before?: string;
  linkText?: string;
  href?: string;
  after?: string;
  document?: RichContentDocument;
}
