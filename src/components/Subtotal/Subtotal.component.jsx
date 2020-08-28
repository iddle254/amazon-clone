import React from "react";
import "./subtotal.styles.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider.context";
import { getBasketTotal } from "../../context/Reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items ): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* price */}
      <button className="subtotal__button">Checkout</button>
    </div>
  );
}

export default Subtotal;
