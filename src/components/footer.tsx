import Image from "next/image";
import Link from "next/link";
import { site } from "@config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="grid gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <p className="font-display text-4xl tracking-wide">DA&apos;STREET 92</p>
          </div>
          <p className="mt-4 font-display text-3xl text-alien">
            {site.tagline} {site.emoji}
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Streetwear en {site.location}. {site.shipping}.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Mapa</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-alien">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/carrito" className="hover:text-alien">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Hablemos</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-alien">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-alien">
                Instagram @{site.handle}
              </a>
            </li>
            <li>{site.location}</li>
            <li className="text-muted">{site.shipping}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-4 pb-24 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Da&apos;Street 92. Santo Domingo Este.</p>
        <p>Pedidos por WhatsApp · sin pasarela por ahora</p>
      </div>
    </footer>
  );
}
