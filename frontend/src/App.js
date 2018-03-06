import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from './container/AboutContainer';
import NotFound from './component/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppFooter from './component/AppFooter';
import BlogContainer from './container/BlogContainer';
import DetailContainer from './container/DetailContainer';
import NavigatorContainer from './container/NavigatorContainer';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = configureStore();

class App extends Component {
    render() {
        console.log("App render");
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({ appBar: {height: 56} })}>
                <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                    <Provider store={store}>
                        <div>
                            <NavigatorContainer />
                            <Switch>
                                <Route exact path="/" component={BlogContainer} />
                                <Route path="/post/:id" component={DetailContainer} />
                                <Route path="/about" component={AboutContainer} />
                                <Route path="*" component={NotFound}/>
                            </Switch>
                            <AppFooter />
                        </div>
                    </Provider>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    };
}

export default App;
