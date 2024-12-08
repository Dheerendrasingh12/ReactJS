import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../ContextAPI/StateProvider";
import { getBasketTotal } from "../ContextAPI/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        perfix={"Rs"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>Rs. {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> The Order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
