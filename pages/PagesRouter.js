import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import Page_Start from './Page_Start'
import Page_Search from './Page_Search';

class PagesRouter extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/defaultCity" exact component={Page_Start} />
          <Route path="/defaultCity/:cityName"  render={(props) => <Page_Start {...props} />} />

          <Route path="/search/Minsk" exact component={Page_Search} />

          <Redirect to="/defaultCity" />
        </Switch>
      </div>)
  }
}

export default PagesRouter;
