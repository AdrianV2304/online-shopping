import React from "react";
import { Link } from "react-router-dom";
import { SITE_ROUTES } from "shared/js";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <div className="nav__links">
          <img src="images/logo.webp" alt="logo" />
          <Link to={SITE_ROUTES.homepage}>Home</Link>
          <Link to={SITE_ROUTES.checkout}>Checkout</Link>
        </div>
        <div className="nav__search">
          <input type="text" placeholder="Search for products..." />
          <img src="images/search-icon.png" alt="plm" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
