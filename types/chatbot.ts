export interface ChatbotLink {
  label: string;
  href: string;
}

export interface ChatbotOption {
  label: string;
  nextNodeId?: string;
  resultPage?: ChatbotLink;
  resultText?: string;
}

export interface ChatbotNode {
  nodeId: string;
  question: string;
  options: ChatbotOption[];
}

export interface ChatbotFallback {
  text: string;
  cta: ChatbotLink;
}

export interface ChatbotFlowContent {
  nodes: ChatbotNode[];
  fallback: ChatbotFallback;
}
