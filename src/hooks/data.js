import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./../actions/productActions";

export const useFetchData = () => {
  const products = useSelector((state) => state.productsList.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return [products];
};
