import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import MasterContainer from './container/MasterContainer';
import HomeContainer from './container/HomeContainer';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = configureStore();

class App extends Component {
    render() {
        console.warn("App render");
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme({ appBar: {height: 56} })}>
                    {/* <MasterContainer /> */}
                    <HomeContainer />
                </MuiThemeProvider>
            </Provider>
        );
    };
}

export default App;
