import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__title">Cart totals</span>
      <div className="cart__details">
        <div className="cart__details--row">
          <span>Subtotal</span>
          <data>$369.00</data>
        </div>

        <div className="cart__details--row total">
          <span>Total</span>
          <data>$369.00</data>
        </div>

        <div className="cart__details--row">
          <span>Shipping</span>
          <data>Free</data>
        </div>

        <div className="cart__details--row">
          <span>Change Address</span>
        </div>

        <button type="submit" className="cart__details--btn">
          Check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
