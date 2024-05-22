import { createStore, applyMiddleware, combineReducers } from "redux";
import cartReducer from "./cartSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import menuReducer from "../menuitems/menuSlice";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
