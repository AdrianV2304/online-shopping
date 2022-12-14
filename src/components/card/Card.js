import React from "react";
import Button from "components/button";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <img src="images/broccoli.png" alt="broccoli" />
        <a href=" " target="_blank">
          Happy Baby Organics Teether, 3 Flavor Variety Pack
        </a>
        <span>$30</span>
      </div>
      <div className="card__btn">
        <Button />
      </div>
    </div>
  );
};

export default Card;
