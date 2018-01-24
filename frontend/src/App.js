import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import AboutMe from './page/about/AboutMe';
import PostPage from './page/post/PostPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PageContainer from './component/container/PageContainer'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({lightBaseTheme})}>
                <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
                    <PageContainer>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/post/:id" component={PostPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/me" component={AboutMe} />
                    </PageContainer>
                </HashRouter>
            </MuiThemeProvider>
        );
    };
}

export default App;
