export interface RichContentBlock {
  type: "paragraph" | "list";
  text?: string;
  items?: string[];
}
