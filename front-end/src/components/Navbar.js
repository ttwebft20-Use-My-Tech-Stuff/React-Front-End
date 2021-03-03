import React from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth';
export default function Navbar() {

  const logout = () => {
    axiosWithAuth().post('/logout')
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/login'
        console.log(window.location.href);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="navigation">
      <nav>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/items">
          <button className="btn">Items</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link onClick={logout}>
          <button className="btn">Logout</button>
        </Link>
      </nav>
    </div>
  );
}
