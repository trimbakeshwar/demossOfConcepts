
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import React from 'react';
import logo from './logo.svg';
import './App.css';

import AsyncDemo from "./components/asyncAwait"
import promisesCompo from "./components/promises"
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/promises" component={promisesCompo}/> 
      <Route exact path="/asyncAwait" component={AsyncDemo}/> 
    </div>
    </Router>
  );
}

export default App;
