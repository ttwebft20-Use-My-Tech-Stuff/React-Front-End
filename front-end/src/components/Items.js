import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ItemsList from './ItemsList';
import Navbar from "../components/Navbar";

export default function Items(props) {

  return (
    <>
      <Navbar />
      <div className="itemscont">
        <div className="content-container">
          <h2>Tech Rentals. Right to your Door.</h2>

          <div className="content">
            <ItemsList items={props.items} setItemsList={props.setItemsList} />
          </div>
        </div>
      </div>
    </>
  );
}
