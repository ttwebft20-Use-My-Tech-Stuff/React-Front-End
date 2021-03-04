import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ItemsList from './ItemsList';
import Navbar from "../components/Navbar";

export default function Items(props) {
  const [itemsList, setItemsList] = useState([]);

  const getItemsList = () => {
    axiosWithAuth()
      .get('/tech_items')
      .then((res) => {
        console.log(res);
        setItemsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getItemsList();
  }, [])

  return (
    <>
      <Navbar />
      <div className="itemscont">
        <div className="content-container">
          <h2>Tech Rentals. Right to your Door.</h2>
          <div className="content">
            <ItemsList items={itemsList} setItemsList={setItemsList} />
          </div>
        </div>
      </div>
    </>
  );
}
