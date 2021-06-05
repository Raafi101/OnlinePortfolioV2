import React from 'react';
import './App.css';

import Overview from './Pages/OverviewPage.js';
import Qualifications from './Pages/QualificationsPage.js';
import Portfolio from './Pages/PortfolioPage.js';
import Contact from './Pages/ContactPage.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" /> 
      <Switch>
        <Route exact path='/' component={Overview} />
        <Route exact path='/qualifications' component={Qualifications} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
