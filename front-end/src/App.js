import React from 'react';
import './App.css';
import Signup from './Signup.js'
import { Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <h1>Welcome to Use My Tech Stuff</h1>
      
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
