import React, { useState, Fragment, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { detailsProduct, clearProduct } from "../actions/productActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(detailsProduct(id));

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };

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

  const displayProduct = () => {
    return (
      <Fragment>
        {product && (
          <Fragment>
            <div className="back-to-result">
              <Link to="/">Back to result</Link>
            </div>

            <div className="details">
              <div className="details-image">
                <img src={product.image} alt="product"></img>
              </div>

              <div className="details-info">
                <ul>
                  <li>
                    <h4>{product.name}</h4>
                  </li>
                  <li>
                    {product.rating} Stars ({product.numReviews} Reviews)
                  </li>
                  <li>
                    Price: <b>£{product.price}</b>
                  </li>
                  <li>
                    Description:
                    <div>{product.description}</div>
                  </li>
                </ul>
              </div>

              <div className="details-action">
                <ul>
                  <li>Price: £{product.price}</li>
                  <li>
                    Status:{" "}
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </li>

                  <li>
                    Qty:{" "}
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>

                  <li>
                    {product.countInStock > 0 && (
                      <button
                        onClick={handleAddToCart}
                        className="button primary"
                      >
                        Add to Cart
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      {loading ? showLoading() : error ? showError() : displayProduct()}
    </Fragment>
  );
};

export default ProductScreen;
