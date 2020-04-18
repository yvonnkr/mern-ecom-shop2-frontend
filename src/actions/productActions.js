import axios from "axios";
import { API } from "./../config";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API}/api/products`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: { err },
    });
  }
};
