import React, { useState } from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import ItemsList from './ItemsList';
import ItemCard from './ItemCard';
import placeholder from "../images/placeholder.webp";
import ItemForm from './ItemForm'

const InitialForm = false
const userInfo = {
  first: "Kirk",
  last: "Snyder",
  username: "krsnyder",
  email: "Kirk@gmail.com",
  zipcode: "07732"
}

const items = [
  {
  category: "Camera",
  description: "Canon 1D camera body, backup battery and charger included. No lens.",
  item_name: "Canon 1D",
  owner_username: 'krsnyder',
  price: "27.99",
  },
  {
    category: "Television",
    description: "As intelligent as it is beautiful. A smart TV interface learns the content you like and makes suggestions based on what you watch. Concentrated zones of LED backlighting deliver heightened contrast and impeccable detail.",
    item_name: "Samsung Q80T",
    owner_username: 'krsnyder',
    price: "43.99",
  },
  {
    category: "Camera",
    description: "To experience the ultimate in wide-angle photography, the EF 11-24mm f/4L USM brings L-series construction and optics to the widest zoom lens Canon has ever made. ",
    item_name: "Canon EF 11-24mm F4L USM",
    owner_username: 'krsnyder',
    price: "14.49",
  },
  {
    category: "Camera",
    description: "To experience the ultimate in wide-angle photography, the EF 11-24mm f/4L USM brings L-series construction and optics to the widest zoom lens Canon has ever made. ",
    item_name: "Canon EF 11-24mm F4L USM",
    owner_username: 'krsnyder',
    price: "14.49",
    }
]

// props will contain all user info and items
export default function Profiles() {

  const { first, last, username, email, zipcode } = userInfo
  const [displayForm, setDisplayForm] = useState(InitialForm)

  const onClick = () => {
    setDisplayForm(!displayForm)
  }
  
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h1>Username</h1>
        <div className="user-info">
          <p>Name: {first} {last}</p>
          <p>Username: {username}</p>
          <p>Email: { email }</p>
          <p>Zipcode: { zipcode }</p>
        </div>

        <button onClick={onClick}>Add Item</button>

        {displayForm && <ItemForm />}

        
          <div className="content">
            <ItemsList items={items}/>
          </div>
      </div>

    </div>
  )
}