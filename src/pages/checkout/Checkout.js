import React from "react";

import Layout from "containers/layout";
import Cart from "components/cart";

const Checkout = () => {
  return (
    <Layout>
      <div className="checkout">
        <div className="checkout__table">
          <div className="checkout__table--row">
            <span>Remove</span>
            <button>X</button>
          </div>

          <div className="checkout__table--row">
            <span>Product</span>
            <img src="images/products/broccoli.png" alt="broccoli" />
            <span>Baby Organics Teether, 3Flavor Variety Pack</span>
          </div>

          <div className="checkout__table--row">
            <span>Price</span>
            <data>$369.00</data>
          </div>

          <div className="checkout__table--row">
            <span>Quantity</span>
            <button>01</button>
          </div>

          <div className="checkout__table--row">
            <span>Total</span>
            <data>$369.00</data>
          </div>
        </div>

        <div className="checkout__totals">
          <Cart />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
