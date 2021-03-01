import React, { useState } from 'react'
import * as yup from 'yup'

const initialForm = {
  first: "",
  last: "",
  username: "",
  email: "",
  zipcode: "",
  password: "",
  confirm: ""
}

const initialFormErrors = {
  first: "",
  last: "",
  username: "",
  email: "",
  zipcode: "",
  password: "",
  confirm: ""
}

const initialDisabled = true;
const initialUsers = []

export default function Signup() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialForm)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDIsabled] = useState(initialDisabled)

  const onChange = (e) => {
    const { name, value } = e.target
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    // Sign up needs first, last, username, email, zip, password and confirm
    <div className="signup-container">
      <h2>Sign up here!</h2>
      <form onSubmit={ }>
        <label>First:
        <input
          name="first"
          type="text"
          value={formValues.first}
          onChange={onChange}
          />
        </label>

        <label>Last:
        <input
          name="last"
          type="text"
          value={formValues.last}
          onChange={onChange}
          />
        </label>

        <label>Username:
        <input
          name="username"
          type="text"
          value={formValues.username}
          onChange={onChange}
          />
        </label>

        <label>Email:
        <input
          name="email"
          type="text"
          value={formValues.email}
          onChange={onChange}
          />
        </label>

        <label>Zipcode:
        <input
          name="zipcode"
          type="text"
          value={formValues.zipcode}
          onChange={onChange}
          />
        </label>

        <label>Password:
        <input
          name="password"
          type="text"
          value={formValues.password}
          onChange={onChange}
          />
        </label>

        <label>Confirm Password:
        <input
          name="confirm"
          type="text"
          value={formValues.confirm}
          onChange={onChange}
          />
        </label>

        <button
          name="submit"
          type="submit"
          disabled={ disabled }
        >Submit</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}