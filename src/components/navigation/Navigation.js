import React from "react";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__links">
        <img src="images/logo.webp" alt="logo" />
        <a href=" " target="_blank">
          Home
        </a>
        <a href=" " target="_blank">
          Checkout
        </a>
      </div>
      <div className="nav__search">
        <input type="text" placeholder="Search for products..." />
        <img src="images/search-icon.png" alt="plm" />
      </div>
    </div>
  );
};

export default Navigation;
