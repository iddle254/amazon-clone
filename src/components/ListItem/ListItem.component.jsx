import React from "react";
import "./listitem.styles.css";
import { useStateValue } from "../../context/StateProvider.context";

function ListItem({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="listItem">
      <img src={image} alt="" className="listItem__img" />
      <div className="listItem__info">
        <p className="listItem__title">{title}</p>
        <p className="listItem__price">
          <small>Kshs/=</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>🌟</span>
            ))}
        </div>
        <button onClick={removeItemFromBasket} className="listItem__button">
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default ListItem;
