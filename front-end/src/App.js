<<<<<<< HEAD
import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup.js'
import Login from './components/Login';
import Profiles from './components/Profiles'
import { Route, Switch } from 'react-router-dom'

=======
import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup.js";
import Login from "./components/Login";
import Items from "./components/Items";
import Nav from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
>>>>>>> 4a02730845b37d1d07ff6629c72b9ed222c8fd29

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
        <Route path="/nav">
          <Nav />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
<<<<<<< HEAD
        <Route path='/profiles/:id'>
          <Profiles userInfo={user} />
        </Route>
        <Route path='/'>
=======
        <Route path="/">
>>>>>>> 4a02730845b37d1d07ff6629c72b9ed222c8fd29
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
