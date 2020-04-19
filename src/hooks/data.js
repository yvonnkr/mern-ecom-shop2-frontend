import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "./../actions/productActions";

//example not currently using in this app
export const useFetchData = () => {
  const productList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return [products, loading, error];
};
