import React, { useState, useEffect } from 'react'
import itemSchema from '../validation/itemSchema'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  item_name: "",
  category: "",
  description: "",
  price: "",
  owner_username: ""
}

const initialFormErrors = {
  item_name: "",
  category: "",
  description: "",
  price: "",
  owner_username: ""
}

const initialDisabled = true

export default function ItemForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target
    yup.reach(itemSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })

      })

    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post('/tech_items', formValues)
      .then((res) => {
        props.items.push(res.data)
        props.setItemsList(props.items);
        push('./items');
      })
      .catch((err) => {
        console.log(err);
      })
    setFormValues(initialFormValues);
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
          Description:
          <textarea
            type="text"
            name="description"
            value={formValues.description}
            onChange={onChange}
            rows='4'
            cols='50'
          />
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
          <div>{formErrors.description}</div>
          <div>{formErrors.category}</div>
          <div>{formErrors.owner_username}</div>
        </div>

      </form>
    </div>
  )
}