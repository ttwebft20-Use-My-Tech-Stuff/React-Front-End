import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

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
        <Link to="/profiles">
          <button className="btn">My Profile</button>
        </Link>
      </nav>
    </div>
  );
}
