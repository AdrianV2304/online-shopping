import React from "react";
import Button from "components/button";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="card__content">
        <img src="images/broccoli.png" alt="broccoli" />
        <a href=" " target="_blank">
          {props.title}
        </a>
        <span>${props.price}</span>
      </div>
      <div className="card__btn">
        <Button />
      </div>
    </div>
  );
};

export default Card;
