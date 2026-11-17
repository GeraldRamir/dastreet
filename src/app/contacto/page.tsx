import type { Metadata } from "next";
import { site } from "@config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "WhatsApp, Instagram y ubicación de Da'Street 92 en Santo Domingo Este. Envíos a todo el país.",
};

export default function ContactPage() {
  return (
    <div className="px-4 pb-16 pt-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-alien">Hablemos</p>
      <h1 className="type-display">Contacto</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Hoy el pedido se cierra por WhatsApp. Escríbenos con la pieza, la talla y tu sector.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="border border-alien bg-alien/10 p-6 hover:bg-alien hover:text-ink"
        >
          <p className="text-xs uppercase tracking-[0.2em]">WhatsApp</p>
          <p className="mt-2 break-words font-display text-[clamp(2rem,9vw,3rem)]">{site.phoneDisplay}</p>
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="border border-white/15 p-6 hover:border-alien"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Instagram</p>
          <p className="mt-2 break-words font-display text-[clamp(2rem,9vw,3rem)]">@{site.handle}</p>
        </a>
        <div className="border border-white/15 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Ubicación</p>
          <p className="mt-2 font-display text-[clamp(1.8rem,8vw,2.5rem)] uppercase leading-none">{site.location}</p>
          <p className="mt-2 text-sm text-muted">{site.hours}</p>
          <p className="text-xs text-muted">{site.hoursNote}</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-globe underline">
            Cómo llegar
          </a>
        </div>
        <div className="border border-white/15 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Envíos</p>
          <p className="mt-2 font-display text-[clamp(1.8rem,8vw,2.5rem)] uppercase leading-none">{site.shipping}</p>
          <p className="mt-2 text-sm text-muted">{site.shippingDetail}</p>
        </div>
      </div>

      <section className="mt-14" aria-labelledby="faq">
        <h2 id="faq" className="type-display">
          Preguntas
        </h2>
        <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
          {site.faq.map((item) => (
            <details key={item.q} className="py-4">
              <summary className="cursor-pointer text-lg">{item.q}</summary>
              <p className="pt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
