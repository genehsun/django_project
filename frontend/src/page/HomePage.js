import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router-dom';
import AppFooter from '../component/AppFooter';
import NavigationMenu from '../component/NavigationMenu'

class App extends Component {
    constructor(props) {
		super(props);
		this.state = { categories: [] };
    };
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({appBar: {height: 55}})}>
                <div>
                    <NavigationMenu categories={this.state.categories}/>

                    <h1>React Router</h1>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>

                    <AppFooter/>
                </div>
            </MuiThemeProvider>
        )
    };
}

export default App;