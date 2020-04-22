import axios from "axios";
import { API } from "./../config";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_PRODUCT,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`${API}/api/products`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    const { data } = await axios.get(`${API}/api/products/${productId}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const clearProduct = () => (dispatch) => {
  dispatch({ type: CLEAR_PRODUCT });
};

export const saveProduct = (product) => async (dispatch, getState) => {
  const { userSignin } = getState();
  const { token } = userSignin.userInfo;

  dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });

  try {
    if (!product._id) {
      const { data } = await axios.post(`${API}/api/products`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `${API}/api/products/${product._id}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.response.data.msg });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  const { userSignin } = getState();
  const { token } = userSignin.userInfo;
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await axios.delete(`${API}/api/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.response.data.msg });
  }
};
