import { combineReducers } from "redux";

import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
} from "./productReducers";
import { cartReducer } from "./cartReducer";
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./userReducer";

export default combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
});
