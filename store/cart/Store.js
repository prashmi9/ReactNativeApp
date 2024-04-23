import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// Create store
export default store = configureStore({ reducer: { cart: cartReducer } });
