import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Signup from './Signup.js'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
