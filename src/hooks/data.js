import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./../config";

export const useFetchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API}/api/products`);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return [products];
};
