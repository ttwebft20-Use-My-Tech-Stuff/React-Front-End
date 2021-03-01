import React from 'react';
import './App.css';
import Signup from './Signup.js'
import { Router } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <h1>Welcome to Use My Tech Stuff</h1>
      
      <Router path="/signup">
        <Signup />
      </Router>
    </div>
  );
}

export default App;
