import React from "react";
import { useEffect, useState } from "react";
import * as yup from "yup";
import loginSchema from "../validation/loginSchema";

const initialFormValues = {
  uname: "",
  psw: "",
  remember: false,
};

const initialFormErrors = {
  uname: "",
  psw: "",
};

const initialDisabled = true;

function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
    onSubmit();
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="logincont">
      <form onSubmit={onSubmit}>
        <div className="textcontainer">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={onChange}
            value={formValues.uname}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={onChange}
            value={formValues.psw}
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
          <span className="psw">
            Forgot <a href="#">Password?</a>
          </span>
        </div>
        <div className="errors">
          <div>{formErrors.uname}</div>
          <div>{formErrors.psw}</div>
        </div>
      </form>
    </div>
  );
}
export default Login;