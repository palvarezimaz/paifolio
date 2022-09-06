import React from 'react';
import GA4React from 'ga-4-react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import RouteChangeTracker from './helpers/RouteChangeTracker';
import usePageTracking from './helpers/UsePageTracking';

import './App.scss';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
const ga4react = new GA4React(TRACKING_ID);
GA4React.initialize.then().catch();

function App() {
  usePageTracking();
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
