import axios from "axios";

import { API } from "./../config";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const {
      data: { data: newOrder },
    } = await axios.post(`${API}/api/orders/`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
  } catch (error) {
    // dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.response.data.msg });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_LIST_REQUEST });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const { data } = await axios.get(`${API}/api/orders/mine`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MY_ORDER_LIST_FAIL,
      payload: error.response.data.msg,
    });
    // dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const { data } = await axios.get(`${API}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.response.data.msg });
    // dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const { data } = await axios.get(`${API}/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const payOrder = (order, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const { data } = await axios.put(
      `${API}/api/orders/${order._id}/pay`,
      paymentResult,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    // dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
    dispatch({ type: ORDER_PAY_FAIL, payload: error.response.data.msg });
  }
};

export const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });

    const { userSignin } = getState();
    const { token } = userSignin.userInfo;

    const { data } = await axios.delete(`${API}/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DELETE_FAIL, payload: error.response.data.msg });
  }
};
