import React, { useState } from "react";
import ItemsList from './ItemsList';
import ItemCard from './ItemCard';
import placeholder from "../images/placeholder.webp";
export default function Items(props) {
  const [itemsList, setItemsList] = useState([]);
  return (
    <div class="itemscont">
      <div className="content-container">
        <h2>Tech Rentals. Right to your Door.</h2>
        <div className="content">
          <ItemsList items={itemsList} setItemsList={setItemsList} />
          <ItemCard img={placeholder} name={"Placeholder"} price={"12.99"} />
        </div>
      </div>
    </div>
  );
}
