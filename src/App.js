
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import React from 'react';
import logo from './logo.svg';
import './App.css';

import promisesCompo from "./components/promises"
import contextdemo from "./components/contextdemo"
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/promises" component={promisesCompo}/> 
      <Route exact path="/contextdemo" component={contextdemo}/> 
    </div>
    </Router>
  );
}

export default App;
