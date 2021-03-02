import React from "react";
import Card from "../components/Card";

import placeholder from "../images/placeholder.webp";

export default function Items(props) {
  return (
    <div class="itemscont">
      <div className="content-container">
        <h2>Tech Rentals. Right to your Door.</h2>
        <div className="content">
          <Card img={placeholder} name={"Placeholder"} price={"12.99"} />
          <Card img={placeholder} name={"Placeholder"} price={"12.99"} />
          <Card img={placeholder} name={"Placeholder"} price={"19.99"} />
          <Card img={placeholder} name={"Placeholder"} price={"14.99"} />
          <Card img={placeholder} name={"Placeholder"} price={"19.99"} />
          <Card img={placeholder} name={"Placeholder"} price={"14.99"} />
        </div>
      </div>
    </div>
  );
}
