import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa tu pedido de Da'Street 92 y envíalo por WhatsApp.",
};

export default function Page() {
  return (
    <div className="px-4 pb-16 pt-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-alien">Pedido</p>
      <h1 className="type-display">Carrito</h1>
      <CartPage />
    </div>
  );
}
