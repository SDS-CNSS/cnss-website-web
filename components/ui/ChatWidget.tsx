"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

type ChatMessage = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const QUICK_REPLIES = [
  "Employeur",
  "Travailleur salarié",
  "Retraité / pensionné",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    from: "bot",
    text: "Bonjour ! Je suis l'assistant virtuel de la CNSS.",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "user", text: trimmed },
    ]);
  }

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Ouvrir le chat"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full bg-primary-800 shadow-2xl transition-transform hover:scale-105 hover:bg-primary-hover"
      >
        <span className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-surface">
          <Image
            src="/images/logo-cnss.png"
            alt=""
            width={32}
            height={32}
            className="object-contain"
          />
        </span>
        <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-primary text-on-primary ring-2 ring-surface">
          <MessageCircle className="size-3.5" />
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-surface sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[37.5rem] sm:max-h-[calc(100vh-3rem)] sm:w-[23.75rem] sm:max-w-[calc(100vw-1.5rem)] sm:rounded-2xl sm:shadow-2xl">
      <div className="flex items-center justify-between gap-4 bg-primary-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface">
            <Image
              src="/images/logo-cnss.png"
              alt=""
              width={28}
              height={28}
              className="object-contain"
            />
          </span>
          <p className="font-heading text-lg font-bold text-on-primary">
            Besoin d&rsquo;aide ?
          </p>
        </div>
        <button
          type="button"
          aria-label="Fermer le chat"
          onClick={() => setOpen(false)}
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-on-primary transition-colors hover:bg-white/20"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
        {messages.map((message) =>
          message.from === "bot" ? (
            <div
              key={message.id}
              className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-surface-light-2 px-4 py-3 text-sm font-medium text-ink"
            >
              {message.text}
            </div>
          ) : (
            <div
              key={message.id}
              className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm font-medium text-on-primary"
            >
              {message.text}
            </div>
          ),
        )}

        <div className="flex max-w-[85%] flex-col gap-3 self-start rounded-2xl rounded-tl-sm bg-surface-light-2 px-4 py-3">
          <p className="text-sm font-medium text-ink">
            Pour mieux vous orienter, dites-moi qui vous êtes :
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary-100 hover:text-primary-800"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
