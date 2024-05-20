import { createSlice } from "@reduxjs/toolkit";
import { shopData } from "./menuActions";
const initialState = {
  menuItems: [],
  shopdata: [],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchShopData: (state, action) => {
      console.log("shopData", action.payload);
      state.shopdata = action.payload;
    },
  },
});

export const { fetchShopData } = menuSlice.actions;
export const selectMenuItems = (state) => state.menu.menuItems;

export default menuSlice.reducer;
