// @flow
import React, { Component } from 'react';

import '@commonScss/index.scss';
import Routers from './routers';

class App extends Component<{}, {}> {
  render() {
    return (
      <Routers />
    )
  }
}

export default App;
