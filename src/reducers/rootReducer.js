import { combineReducers } from "redux";

import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducer";
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./userReducer";

export default combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
});
