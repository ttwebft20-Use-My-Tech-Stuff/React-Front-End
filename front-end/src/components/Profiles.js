import React, { useState } from 'react'
import Navbar from './Navbar'
// import ItemsList from './ItemsList';
import ItemForm from './ItemForm'

const InitialForm = false
// props will contain all user info and items
export default function Profiles(/*{ userInfo, items }*/) {

  // const { first, last, username, email, zipcode } = userInfo
  const [displayForm, setDisplayForm] = useState(InitialForm)

  const onClick = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <div>
      <Navbar />
      <h1>Username</h1>
      <div className="user-info">
        {/* <p>Name: {first} {last}</p>
        <p>Username: {username}</p>
        <p>Email: { email }</p>
        <p>Zipcode: { zipcode }</p> */}
      </div>

      <button onClick={onClick}>Add Item</button>

      {displayForm && <ItemForm />}

      {/* {items.map(item => {
        <div className="content">
          <ItemsList items={itemsList} setItemsList={setItemsList} />

        </div>
      })} */}
    </div>
  )
}