import React from "react";

export default function Nav(props) {
  return (
    <div className="navigation">
      <nav>
        <button className="btn" href="/">
          Home
        </button>
        <button className="btn" href="/items">
          Items
        </button>
        <button className="btn" href="/signup">
          Signup
        </button>
        <button className="btn" href="/login">
          Login
        </button>
      </nav>
    </div>
  );
}
