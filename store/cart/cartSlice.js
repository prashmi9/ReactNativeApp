// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartItemsCount += 1;
    },
    removeFromCart: (state) => {
      state.cartItemsCount = Math.max(0, state.cartItemsCount - 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItemsCount = (state) => state.cart.cartItemsCount;

export default cartSlice.reducer;
