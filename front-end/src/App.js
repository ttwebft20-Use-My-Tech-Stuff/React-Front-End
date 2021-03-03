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
        <PrivateRoute exact path='/items' component={Items} />z
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path='/profiles' component={Profiles} />
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
