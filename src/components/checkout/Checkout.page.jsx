import React from "react";
import { useStateValue } from "../../context/StateProvider.context";
import ListItem from "../ListItem/ListItem.component";
import Subtotal from "../Subtotal/Subtotal.component";
import "./checkout.styles.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        />
        <p className="checkout__title">Your cart</p>
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
          </div>
        ) : (
          basket.map((item) => <ListItem key={item.id} {...item} />)
        )}
      </div>

      {basket?.length > 0 && (
        <div className="checkout__right">
          <h1 className="checkout__subtitle">Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
