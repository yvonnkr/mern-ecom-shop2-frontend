import React from "react";
import { Link } from "react-router-dom";

import { useFetchData } from "./../hooks/data";

const HomeScreen = () => {
  const [products] = useFetchData();

  return (
    <>
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
    </>
  );
};

export default HomeScreen;
