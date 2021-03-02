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

  const onChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const { name } = e.target;

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
  return (
    <div class="logincont">
      <form onsubmit={onSubmit}>
        <div class="textcontainer">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={onChange}
            value={formValues.uname}
          />
          <label for="psw">
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
              onChange={onChange}
              checked={formValues.remember}
            />
            <label>Remember Me </label>
          </div>
        </div>
        <div class="btncontainer">
          <span class="psw">
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
