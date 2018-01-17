import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        {AppRoutes}
      </HashRouter>
    )
  }
}

export default App;
