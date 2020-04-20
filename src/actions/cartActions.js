import axios from "axios";
import Cookie from "js-cookie";

import { API } from "../config";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  //   CART_SAVE_SHIPPING,
  //   CART_SAVE_PAYMENT,
} from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${API}/api/products/${productId}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    const { cart } = getState();
    Cookie.set("cartItems", JSON.stringify(cart.cartItems)); //used in stoje.js
  } catch (error) {}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const { cart } = getState();
  Cookie.set("cartItems", JSON.stringify(cart.cartItems)); //used in stoje.js
};
