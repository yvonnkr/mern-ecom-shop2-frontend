import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

import { useFetchData } from "./../hooks/data";

const ProductScreen = () => {
  const [products] = useFetchData();
  const { id } = useParams();

  const product = products.find((product) => product._id === id);

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
                <li>Status: </li>
                <li>
                  Qty:{" "}
                  <select name="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </li>
                <li>
                  <button className="button primary">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductScreen;
