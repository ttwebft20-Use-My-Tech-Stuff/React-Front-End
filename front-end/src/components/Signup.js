// import axios from 'axios'
import React, { useEffect, useState } from "react";
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
};

const initialFormErrors = {
  first: "",
  last: "",
  username: "",
  email: "",
  zipcode: "",
  password: "",
  confirm: "",
};

const initialDisabled = true;
// const initialUsers = []
const initialConfirmation = [false];

export default function Signup() {
  // const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [confirmation, setConfirmation] = useState(initialConfirmation);

  const onChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    setConfirmation(true);
    // axios.post('/', formValues)
    //   .then(res => { })
  };

  useEffect(() => {
    signupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    // Sign up needs first, last, username, email, zip, password and confirm
    <div className="signup-container">
      <h2>Sign up here!</h2>
      <form onsubmit={onSubmit}>
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
              type="text"
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
              type="text"
              value={formValues.confirm}
              onChange={onChange}
            />
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
