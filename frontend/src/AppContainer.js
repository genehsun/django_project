import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppFooter from './component/AppFooter';
import NavigationMenu from './component/NavigationMenu';

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
            <MuiThemeProvider muiTheme={getMuiTheme({lightBaseTheme})}>
                <div>
                    <NavigationMenu categories={this.state.categories}/>

                    <div style={this.style.container}>
                        {this.props.children}
                    </div>

                    <AppFooter/>
                </div>
            </MuiThemeProvider>
        )
    };
}

export default App;