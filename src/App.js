import React from 'react';
import ReactGA from 'react-ga4';
// import TagManager from 'react-gtm-module';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

// import RouteChangeTracker from './helpers/RouteChangeTracker';

import './App.scss';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

// const TAG_ID = process.env.REACT_APP_TAG_ID;

// const tagManagerArgs = {
//   gtmId: TAG_ID,
// };

// TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      {/* <div>
        <RouteChangeTracker />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
