import React from "react";
import "./nav.styles.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../context/StateProvider.context";

function Nav() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Hello Charles,</span>
            <span className="header__optionLine2">Signin</span>
          </div>
        </Link>
        <Link to="/return-policy" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>
        <Link to="prime" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2"> Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <Cart />
            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
