import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (item) =>
        set((state) => ({ items: [...state.items, item] })),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    { name: 'cart-storage' }
  )
);
