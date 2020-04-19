import { combineReducers } from "redux";

import { productListReducer, productDetailsReducer } from "./productReducers";

export default combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
});
