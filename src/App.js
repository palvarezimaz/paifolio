import React from 'react';
import ReactGA from 'react-ga';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import RouteChangeTracker from './helpers/RouteChangeTracker';

import './App.scss';

const TRACKING_ID = 'G-9TPCV8506T';
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      <div>
        <RouteChangeTracker />
      </div>
    </BrowserRouter>
  );
}

export default App;
