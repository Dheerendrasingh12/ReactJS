import React from "react";
import Mac from "../images/macbook.jpg";
import "./CheckoutProduct.css";
import { useStateValue } from "../ContextAPI/StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  function removeFromBasket() {
    console.log("remove from basket");
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">Rs.{price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              <p key={index}>★</p>;
            })}
          ★
        </div>
        <button onClick={() => removeFromBasket()}>Remove basket</button>{" "}
      </div>
    </div>
  );
}

export default CheckoutProduct;
