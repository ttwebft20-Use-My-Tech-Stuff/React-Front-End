import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup.js";
import Login from "./components/Login";
import Items from "./components/Items";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
