import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import HomeContainer from './container/HomeContainer';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <HomeContainer />
                </MuiThemeProvider>
            </Provider>
        );
    };
}

export default App;
