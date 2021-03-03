import React, { useState, useEffect } from 'react'
import itemSchema from '../validation/itemSchema'

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
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //Need to make a post request to send the information
    console.log("OK")
  }

  useEffect(() => {
    itemSchema.isValid(formValues).then((valid) => setDisabled(!valid));
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
          <select name="category">
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

        <button
          type="submit"
          name="submit"
          disabled={disabled}
        >
          Submit
        </button>

      </form>
    </div>
  )
}