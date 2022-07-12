import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Homepage from './pages/Homepage';
import HomepageLight from './pages/HomepageLight';
import HomepageDark from './pages/HomepageDark';

import './App.scss';

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
    </BrowserRouter>
  );
}

export default App;
