import React from 'react';
import './App.css';

import HomePage from './Pages/HomePage.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
