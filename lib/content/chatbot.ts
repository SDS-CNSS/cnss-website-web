import { strapiFetch } from "@/lib/strapi/client";
import { mapChatbotFlow, type StrapiChatbotFlow } from "@/lib/strapi/mappers/chatbot-flow";
import type { ChatbotFlowContent } from "@/types/chatbot";

export async function getChatbotFlowContent(locale: string): Promise<ChatbotFlowContent> {
  const { data } = await strapiFetch<StrapiChatbotFlow>(
    `/chatbot-flow?locale=${locale}&populate[nodes][populate][options][populate]=*&populate[fallback][populate]=*`,
  );

  return mapChatbotFlow(data);
}
