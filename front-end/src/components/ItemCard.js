import React from "react";

export default function ItemCard(props) {
  const { img, price, name } = props;

  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="cardcont">
        <h4>${price} /per day</h4>
        <button>Rent Now</button>
      </div>
    </div>
  );
}
