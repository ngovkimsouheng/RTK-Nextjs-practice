import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: cartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (!existing) return;
      state.totalQuantity -= 1;
      state.totalAmount -= existing.price;
      if (existing.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existing.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
