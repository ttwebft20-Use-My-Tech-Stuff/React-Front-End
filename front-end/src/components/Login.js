import React from 'react';

const initialFormValues = {
  uname: "",
  psw: "",
  remember: false,
};
const initialFormErrors = {
  uname: "",
  psw: "",
  
};


export default function Login(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar" />
  </div>

  <div class="textcontainer">
    <label for="uname"><b>Username</b></label>
    <input 
    type="text" 
    placeholder="Enter Username" 
    name="uname" 
    onChange={onChange}
    value ={values.uname}>
    </input>

    <label for="psw"><b>Password</b></label>
    <input 
    type="password" 
    placeholder="Enter Password" 
    name="psw" 
    onChange = {onChange}
    value = {values.psw}> 
    </input>

    <button disabled ={disabled} type="submit">Login</button>
    <label>
      <input 
      type="checkbox" 
      checked="checked" 
      name="remember"
      onChange={onChange}
      values={values.remember}
      > Remember me 
      </input>
    </label>
  </div>

  <div class="btncontainer">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
  <div className="errors">
            <div>{errors.uname}</div>
            <div>{errors.psw}</div>
          </div>
</form>
  )