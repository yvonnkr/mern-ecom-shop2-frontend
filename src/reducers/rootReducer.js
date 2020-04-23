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

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from "../reducers/orderReducer";

export default combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});
