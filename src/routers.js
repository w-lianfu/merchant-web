// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import Classify from '@comp/classify';
import Forum from '@comp/forum';
import Cart from '@comp/cart';
import My from '@comp/my';
import Setting from '@comp/setting';

class Routers extends Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classify" component={Classify} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/my" component={My} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </Router>
    )
  }
}

export default Routers;
