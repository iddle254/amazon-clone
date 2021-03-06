import React from "react";
import "./product.styles.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider.context";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        title,
        image,
        price,
        rating,
        id,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        {price && rating ? (
          <>
            <p className="product__price">
              <small>Kshs/=</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_) => (
                  <span role="img" aria-label="fire">
                    🔥{" "}
                  </span>
                ))}
            </div>
          </>
        ) : null}
      </div>
      <img src={image} alt="" />
      {price ? (
        <button onClick={addToBasket} className="product__button">
          Add to basket
        </button>
      ) : (
        <Link>
          <span>Shop now</span>
        </Link>
      )}
    </div>
  );
}

export default Product;
