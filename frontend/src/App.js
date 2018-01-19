import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import { Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import PostPage from './page/PostPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from './AppContainer';
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
                <AppContainer>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/post" component={PostPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </AppContainer>
            </HashRouter>
        )
    }
}

export default App;
