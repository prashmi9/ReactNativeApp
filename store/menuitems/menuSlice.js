import { createSlice } from "@reduxjs/toolkit";
import { shopData } from "./menuActions";
const initialState = {
  shopdata: [],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchShopData: (state, action) => {
      // console.log("shopData", action.payload);
      state.shopdata = action.payload;
    },
  },
});

export const { fetchShopData } = menuSlice.actions;
export const selectShopData = (state) => state.menu.shopdata;

export default menuSlice.reducer;
