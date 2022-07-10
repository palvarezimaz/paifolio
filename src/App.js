import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import HomepageLight from './pages/HomepageLight';
import HomepageDark from './pages/HomepageDark';

import './App.scss';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
