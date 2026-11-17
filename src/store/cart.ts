"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  key: string;
  productId: string;
  size: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  drawerOpen: boolean;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  add: (productId: string, size: string, quantity?: number) => void;
  setQty: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      drawerOpen: false,
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
      add: (productId, size, quantity = 1) => {
        const key = `${productId}:${size}`;
        const lines = get().lines;
        const existing = lines.find((line) => line.key === key);
        if (existing) {
          set({
            drawerOpen: true,
            lines: lines.map((line) =>
              line.key === key
                ? { ...line, quantity: line.quantity + quantity }
                : line,
            ),
          });
          return;
        }
        set({
          drawerOpen: true,
          lines: [...lines, { key, productId, size, quantity }],
        });
      },
      setQty: (key, quantity) =>
        set({
          lines: get().lines.map((line) =>
            line.key === key
              ? { ...line, quantity: Math.max(1, quantity) }
              : line,
          ),
        }),
      remove: (key) =>
        set({ lines: get().lines.filter((line) => line.key !== key) }),
      clear: () => set({ lines: [] }),
    }),
    {
      name: "dastreet92-cart",
      skipHydration: true,
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
);

export function useCartCount() {
  const lines = useCart((state) => state.lines);
  const hydrated = useCart((state) => state.hydrated);
  if (!hydrated) return 0;
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}
