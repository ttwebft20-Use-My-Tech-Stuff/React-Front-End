import React, { useState, useEffect } from 'react'
import itemSchema from '../validation/itemSchema'
import * as yup from 'yup'

const initialFormValues = {
  item_name: "",
  category: "",
  price: "",
  owner_username: ""
}

const initialFormErrors = {
  item_name: "",
  category: "",
  price: "",
  owner_username: ""
}

const initialDisabled = true

export default function ItemForm() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  const onChange = (e) => {
    const { name, value } = e.target
    yup.reach(itemSchema, name)
    .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      
      })
    
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //Need to make a post request to send the information
    console.log("OK")
  }

  useEffect(() => {
    itemSchema.isValid(formValues).then((valid) => setDisabled(!valid));
    console.log(formValues)
  }, [formValues]);

  return (
    <div className="item-form">
      <form onSubmit={onSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={formValues.item_name}
            onChange={onChange}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={formValues.category}
            onChange={onChange}
          >
            <option value="">--Select--</option>
            <option value="camera">Camera</option>
            <option value="television">Television</option>
            <option value="party-equipment">Party Equipment</option>
          </select>
        </label>

        <label>
          Price (per day):
          <input
            type="text"
            name="price"
            value={formValues.price}
            onChange={onChange}
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="owner_username"
            value={formValues.owner_username}
            onChange={onChange}
          />
        </label>

        <button
          type="submit"
          name="submit"
          disabled={disabled}
        >
          Submit
        </button>

        <div className="errors">
          <div>{formErrors.item_name}</div>
          <div>{formErrors.price}</div>
          <div>{formErrors.category}</div>
          <div>{formErrors.owner_username}</div>
        </div>

      </form>
    </div>
  )
}