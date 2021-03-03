import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import loginSchema from "../validation/loginSchema";

const initialFormValues = {
  username: "",
  password: "",
  remember: false,
};

const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

function Login() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  const changeFormValues = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const correctValue = type === "checkbox" ? checked : value;
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    changeFormValues(name, correctValue)
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    setUsers([...users, newUser]);
    setFormValues(initialFormValues);
    axios
      .post('http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/login', formValues)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        push('/items');
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="logincont">
      <form onSubmit={onSubmit}>
        <div className="textcontainer">
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={onChange}
            value={formValues.username}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={onChange}
            value={formValues.password}
          />
          <button disabled={disabled} type="submit">
            Login
          </button>
          <div>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={onChange}
              checked={formValues.remember}

              value={formValues.remember}
            />
            <label htmlFor="remember">
              Remember Me
            </label>
          </div>
        </div>
        <div className="btncontainer">
          <span className="password">
            Forgot <a href="#">Password?</a>
          </span>
        </div>
        <div className="errors">
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>
      </form>
    </div>
  );
}
export default Login;
