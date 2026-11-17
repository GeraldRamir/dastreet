"use client";

import { CartLines } from "@/components/cart-lines";
import { CheckoutForm } from "@/components/checkout-form";
import { useCart } from "@/store/cart";

export function CartPage() {
  const lines = useCart((state) => state.lines);
  const hydrated = useCart((state) => state.hydrated);

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
      <CartLines />
      {hydrated && lines.length > 0 ? (
        <div className="border border-white/10 p-4 lg:sticky lg:top-24 lg:self-start">
          <CheckoutForm />
        </div>
      ) : null}
    </div>
  );
}
