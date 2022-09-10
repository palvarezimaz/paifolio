import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

// const history = createHistory();
const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
  });

  return <div></div>;
};

export default withRouter(RouteChangeTracker);
