import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom'

const initialValues = {
  item_name: '',
  category: '',
  description: '',
  price: '',
  owner_username: '',
}

function EditItemForm() {
  const [formValues, setFormValues] = useState(initialValues)
  const { id } = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get(`/tech_items/${id}`)
      .then((res) => {
        setFormValues(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const handleChanges = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const editItem = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .put(`/tech_items/${id}`, formValues)
      .then((res) => {
        console.log('happy path:', res)
      })
      .catch((err) => {
        console.log('sad path:', err.message)
      })
  }

  return (
    <div className='item-form'>
      <form onSubmit={editItem}>
        <label>
          Item Name:
          <input
            type='text'
            name='item_name'
            value={formValues.item_name}
            onChange={handleChanges}
          />
        </label>

        <label>
          Category:
          <select
            name='category'
            value={formValues.category}
            onChange={handleChanges}
          >
            <option value=''>--Select--</option>
            <option value='camera'>Camera</option>
            <option value='television'>Television</option>
            <option value='party-equipment'>Party Equipment</option>
          </select>
        </label>

        <label>
          Description:
          <textarea
            type='text'
            name='description'
            value={formValues.description}
            onChange={handleChanges}
            rows='4'
            cols='50'
          />
        </label>

        <label>
          Price (per day):
          <input
            type='text'
            name='price'
            value={formValues.price}
            onChange={handleChanges}
          />
        </label>

        <label>
          Username:
          <input
            type='text'
            name='owner_username'
            value={formValues.owner_username}
            onChange={handleChanges}
          />
        </label>

        <button type='submit' name='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditItemForm
