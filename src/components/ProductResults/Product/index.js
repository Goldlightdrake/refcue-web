import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./../../forms/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../../redux/Cart/cart.actions";

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { documentID, productThumbnail, productName, productPrice } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCartBtn = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push("/koszyk");
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/produkt/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/produkt/${documentID}`}>{productName}</Link>
            </span>
          </li>
          <li>
            <span className="price">{productPrice} PLN</span>
          </li>
          <li>
            <div className="addToCart">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Dodaj do koszyka
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
