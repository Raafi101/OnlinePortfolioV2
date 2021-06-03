import React from 'react';
import './App.css';

import Overview from './Pages/OverviewPage.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" /> 
      <Switch>
        <Route exact path='/' component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
