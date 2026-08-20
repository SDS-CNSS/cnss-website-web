import type { ChatbotFlowContent, ChatbotLink, ChatbotNode, ChatbotOption } from "@/types/chatbot";

// --- Forme brute renvoyée par l'API Strapi (api::chatbot-flow.chatbot-flow) ---

interface StrapiChatbotLink {
  label: string;
  href: string;
}

interface StrapiChatbotOption {
  label: string;
  nextNodeId?: string | null;
  resultPage?: StrapiChatbotLink | null;
  resultText?: string | null;
}

interface StrapiChatbotNode {
  nodeId: string;
  question: string;
  options: StrapiChatbotOption[];
}

export interface StrapiChatbotFlow {
  nodes: StrapiChatbotNode[];
  fallback: {
    text: string;
    cta: StrapiChatbotLink;
  };
}

function mapLink(link: StrapiChatbotLink): ChatbotLink {
  return { label: link.label, href: link.href };
}

function mapOption(option: StrapiChatbotOption): ChatbotOption {
  return {
    label: option.label,
    nextNodeId: option.nextNodeId ?? undefined,
    resultPage: option.resultPage ? mapLink(option.resultPage) : undefined,
    resultText: option.resultText ?? undefined,
  };
}

function mapNode(node: StrapiChatbotNode): ChatbotNode {
  return {
    nodeId: node.nodeId,
    question: node.question,
    options: node.options.map(mapOption),
  };
}

export function mapChatbotFlow(flow: StrapiChatbotFlow): ChatbotFlowContent {
  return {
    nodes: flow.nodes.map(mapNode),
    fallback: {
      text: flow.fallback.text,
      cta: mapLink(flow.fallback.cta),
    },
  };
}
