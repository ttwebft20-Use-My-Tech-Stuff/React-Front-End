import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup.js";
import Login from "./components/Login";
import Items from "./components/Items";
import Profiles from './components/Profiles'
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

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
        <Route path='/profiles/:id'>
          <Profiles />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
      {/* <PrivateRoute exact path='/items' component={Items} /> */}
    </div>
  );
}

export default App;
