import React, { useState, useEffect } from 'react'
import itemSchema from '../validation/itemSchema'

const initialFormValues = {
  name: "",
  price: "",
  image: ""
}

const initialFormErrors = {
  name: "",
  price: "",
  image: ""
}

const initialDisabled = true

export default function ItemForm() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled);

  const onChange = (e) => {
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
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
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
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
          Image url:
          <input
            type="text"
            name="image"
            value={formValues.image}
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