import { combineReducers } from "redux";

import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
