import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import EsintList from '../functions/esint-list';
import EsintDetails from '../functions/esint-details';


class BasicRoute extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/list" component={EsintList} />
          <Route exact path="/details" component={EsintDetails} />
        </Switch>
      </HashRouter>
    )
  }
}

export default BasicRoute;