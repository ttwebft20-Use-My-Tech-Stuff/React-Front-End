import React from 'react'
import Navbar from './Navbar'
import ItemForm from './ItemForm'

const userInfo = {
  first: "Kirk",
  last: "Snyder",
  username: "krsnyder",
  email: "Kirk@gmail.com",
  zipcode: "07732"
}

// props will contain all user info and items
export default function Profiles(props) {
  const { first, last, username, email, zipcode } = userInfo

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h1>Username</h1>
        <div className="user-info">
          <p>Name: {first} {last}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Zipcode: {zipcode}</p>
        </div>
        <ItemForm items={props.items} setItemsList={props.setItemsList} />
      </div>
    </div>
  )
}