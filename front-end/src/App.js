import React from 'react';
import './App.css';

import Signup from './Signup.js'
import { Route, Switch } from 'react-router-dom' 


function App() {
  return (
    <div className="App">
  
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
    <Landing />
      </Switch>
    </div>
  );
}

export default App;
