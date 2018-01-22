import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import PostPage from './page/PostPage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppFooter from './component/AppFooter';
import NavigationMenu from './component/NavigationMenu';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
		super(props);
		this.state = { categories: [] };
    };

    style = {
		container: {
			marginTop: "3%", marginLeft: "10%",
            marginRight: "10%", marginBottom: "7%",
        }
    };
    
    render() {
        return (
            <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
                <MuiThemeProvider muiTheme={getMuiTheme({lightBaseTheme})}>
                    <div>
                        <NavigationMenu categories={this.state.categories}/>

                        <div style={this.style.container}>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/post/:id" component={PostPage}/>
                            <Route exact path="/about" component={AboutPage}/>
                        </div>

                        <AppFooter/>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        )
    }
}

export default App;
