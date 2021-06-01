import React from 'react';
import './App.css';

import Overview from './Pages/OverviewPage.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
