"use client";

import { site } from "@config/site";
import { IconWhatsapp } from "@/components/icons";

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp a Da'Street 92"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-alien text-ink shadow-lg"
    >
      <span className="pulse-dot absolute inset-0 rounded-full bg-alien" />
      <IconWhatsapp className="relative h-7 w-7" />
    </a>
  );
}
