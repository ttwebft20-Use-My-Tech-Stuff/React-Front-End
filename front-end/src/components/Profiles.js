import React, { useState } from 'react'
import { useRouteMatch, useParams} from 'react-router-dom'
import Nav from './Navbar'
import ItemsList from './ItemsList';
import ItemCard from './ItemCard';
import placeholder from "../images/placeholder.webp";
import ItemForm from './ItemForm'

const InitialForm = false
// props will contain all user info and items
export default function Profiles({ userInfo, items }) {
  
  const { first, last, username, email, zipcode } = userInfo
  const [displayForm, setDisplayForm] = useState(InitialForm)
  
  const onClick = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <div>
      <Nav />
      <h1>Username's Profile</h1>
      <div className="user-info">
        <p>Name: {first} {last}</p>
        <p>Username: {username}</p>
        <p>Email: { email }</p>
        <p>Zipcode: { zipcode }</p>
      </div>

      <button onClick={onClick}>Add Item</button>

      {displayForm && <ItemForm />}
      
      {items.map(item => {
        <div className="content">
          <ItemsList items={itemsList} setItemsList={setItemsList} />
          <ItemCard img={placeholder} name={"Placeholder"} price={"12.99"} />
        </div>
      })}
    </div>
  )
}