import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href=" " target="_blank">
          About us
        </a>
        <a href=" " target="_blank">
          Customer
        </a>
        <a href=" " target="_blank">
          Service
        </a>
        <a href=" " target="_blank">
          Pricacy policy
        </a>
        <a href=" " target="_blank">
          Contact us
        </a>
      </div>

      <div className="footer__logos">
        <img src="images/visa.svg" alt="visalogo" />
        <img src="images/mastercard.svg" alt="mastercardlogo" />
      </div>
      <div className="footer__copyright">
        <span>Copyright © GOSTO all rights reserved. Powered by laberthemes.</span>
      </div>
    </div>
  );
};

export default Footer;
