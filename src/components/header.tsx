"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@config/site";
import { IconCart, IconClose, IconMenu, IconWhatsapp } from "@/components/icons";
import { useCart, useCartCount } from "@/store/cart";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const count = useCartCount();
  const openDrawer = useCart((state) => state.openDrawer);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-colors duration-300 ${
        menu ? "z-[80] bg-ink" : solid ? "z-50 bg-ink" : "z-50 bg-gradient-to-b from-ink via-ink/80 to-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between gap-2 px-3 sm:px-4 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label="Da'Street 92, inicio">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
          />
          <span className="truncate font-display text-xl tracking-wide text-bone sm:text-2xl">
            DA&apos;STREET <span className="text-alien">92</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-bone/80 hover:text-alien"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-alien/70 px-3 py-2 text-xs uppercase tracking-[0.16em] text-alien hover:bg-alien hover:text-ink sm:inline-flex"
          >
            <IconWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={openDrawer}
            className="relative grid h-11 w-11 place-items-center text-bone"
            aria-label={`Abrir carrito, ${count} ${count === 1 ? "pieza" : "piezas"}`}
          >
            <IconCart className="h-6 w-6" />
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center bg-alien px-1 font-display text-sm leading-none text-ink">
              {count}
            </span>
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-bone lg:hidden"
            aria-expanded={menu}
            aria-controls="menu-movil"
            onClick={() => setMenu((value) => !value)}
          >
            <span className="sr-only">{menu ? "Cerrar menú" : "Abrir menú"}</span>
            {menu ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menu ? (
        <nav
          id="menu-movil"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-20 lg:hidden"
          aria-label="Móvil"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-3 font-display text-4xl uppercase tracking-wide text-bone sm:text-5xl"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-alien px-5 py-4 font-display text-3xl tracking-wide text-ink"
          >
            <IconWhatsapp className="h-6 w-6" />
            Pedir por WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
