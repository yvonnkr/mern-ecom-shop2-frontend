import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "./../actions/productActions";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const showLoading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  };

  const showError = () => {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  };

  const displayProducts = () => {
    return (
      <ul className="products">
        {products.length > 0 &&
          products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={`/product/${product._id}`}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">£{product.price}</div>
                <div className="product-rating">
                  {`${product.rating} Stars (${product.numReviews} Reviews)`}
                </div>
              </div>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <Fragment>
      {loading ? showLoading() : error ? showError() : displayProducts()}
    </Fragment>
  );
};

export default HomeScreen;
