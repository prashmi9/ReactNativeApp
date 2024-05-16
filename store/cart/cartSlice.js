// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0,
  productToCart: [],
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
    addProductToCart: (state, action) => {
      state.productToCart.push(action.payload.product);
    },
    removeProduct: (state, action) => {
      state.productToCart = state.productToCart.filter((product) => {
        return product.id !== action.payload.product.id;
      });
    },
  },
});

export const { addToCart, removeFromCart, addProductToCart, removeProduct } =
  cartSlice.actions;

export const selectCartItemsCount = (state) => state.cart.cartItemsCount;
export const productToCart = (state) => state.cart.productToCart;

export default cartSlice.reducer;
