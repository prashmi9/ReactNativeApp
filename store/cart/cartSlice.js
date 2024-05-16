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
      const index = state.productToCart.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (index >= 0) {
        state.productToCart[index].qty += 1;
      } else {
        state.productToCart.push({ ...action.payload.product, qty: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.productToCart.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (index >= 0) {
        state.productToCart[index].qty = Math.max(
          0,
          state.productToCart[index].qty - 1
        );
        if (state.productToCart[index].qty === 0) {
          state.productToCart = state.productToCart.filter(
            (product) => product.id !== action.payload.product.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, addProductToCart, removeProduct } =
  cartSlice.actions;

export const selectCartItemsCount = (state) => state.cart.cartItemsCount;
export const productToCart = (state) => state.cart.productToCart;

export default cartSlice.reducer;
