import React from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.scss';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
