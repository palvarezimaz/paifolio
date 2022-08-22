import React from 'react';
import ReactGA from 'react-ga';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomepageLight from './pages/HomepageLight';
import HomepageDark from './pages/HomepageDark';

import RouteChangeTracker from './helpers/RouteChangeTracker';

import './App.scss';

const TRACKING_ID = "G-9TPCV8506T";
ReactGA.initialize(TRACKING_ID);




function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <HomepageDark />
        </Route>
        <Route path="/dark" exact>
          <HomepageDark />
        </Route>
        <Route path="/light" exact>
          <HomepageLight />
        </Route>
      </Switch>
      <div>
        <RouteChangeTracker />
      </div>
    </BrowserRouter>

  );
}

export default App;
