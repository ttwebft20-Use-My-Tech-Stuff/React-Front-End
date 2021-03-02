// import axios from 'axios'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import signupSchema from "../validation/signupSchema";

const initialForm = {
  first: "",
  last: "",
  username: "",
  email: "",
  zipcode: "",
  password: "",
  confirm: "",
  role: ""
};


const initialFormErrors = {
  first: "",
  last: "",
  username: "",
  email: "",
  zipcode: "",
  password: "",
  confirm: "",
  role: ""
};


const initialDisabled = true;
const initialConfirmation = [false];

export default function Signup() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [confirmation, setConfirmation] = useState(initialConfirmation);
  const { push } = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    axios
      .post('http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/register', newUser)
      .then((res) => {
        console.log(res);
        setUsers([...users, newUser]);
        push('/login');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    signupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    // Sign up needs first, last, username, email, zip, password and confirm
    <div className="signup-container">
      <h2>Sign up here!</h2>
      <form onSubmit={onSubmit}>
        <div className="input">
          <label>
            First:
            <input
              name="first"
              type="text"
              value={formValues.first}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Last:
            <input
              name="last"
              type="text"
              value={formValues.last}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={formValues.email}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Zipcode:
            <input
              name="zipcode"
              type="text"
              value={formValues.zipcode}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="input">
          <label>
            Confirm Password:
            <input
              name="confirm"
              type="password"
              value={formValues.confirm}
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <label>User Type:
            <select
              onChange={onChange}
              value={formValues.role}
              name='role'
            >
              <option value=''>- - select one - -</option>
              <option value='owner'>Owner</option>
              <option value='renter'>Renter</option>
            </select>
          </label>
        </div>

        <div id="buttons">
          <button name="submit" type="submit" disabled={disabled}>
            Submit
          </button>
          <button>Cancel</button>
        </div>

        <div className="errors">
          <div>{formErrors.first}</div>
          <div>{formErrors.last}</div>
          <div>{formErrors.username}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.zipcode}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.confirm}</div>
        </div>

        {confirmation && <p>Thanks for registering!</p>}
      </form>
    </div>
  );
}
