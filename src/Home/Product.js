import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider"; // Ensure correct import path
import "./Product.css";

function Product({ id, title, rating, price, image }) {
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    console.log("Item added to basket");
    dispatch({
      type: "ADD_TO_BASKET", // Action type is correct now
      item: { id, title, rating, price, image }, // Correct payload
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>★</p> // Ensure each star has a unique key
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToBasket(); // If this isn't logged, then the function isn't being triggered
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
