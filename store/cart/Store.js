import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { combineReducers } from "redux";
import menuReducer from "../menuitems/menuSlice";
// Create store
export default store = configureStore({
  reducer: { cart: cartReducer, menu: menuReducer },
});
