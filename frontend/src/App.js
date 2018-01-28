import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsPage from './page/home/PostsPage';
import AboutPage from './page/about/AboutPage';
import AboutMe from './page/about/AboutMe';
import NotFound from './page/notfound/NotFound';
import PostDetailPage from './page/post/PostDetailPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppNavigator from './component/navigator/AppNavigator';
import PageContainer from './component/container/PageContainer';
import AppFooter from './component/footer/AppFooter';
import PropTypes from 'prop-types';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    };

    // 用于说明上下文中的数据类型
    static childContextTypes = {
        // state
        posts: PropTypes.array.isRequired,
    };

    // 用于指定子组件可直接访问的上下文数据
    getChildContext() {
        return {
            posts: this.state.posts,
        }
    };

    componentDidMount() {
        var url = "/api/blogs/";
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        var request = new Request(url, {
            headers: headers,
            method:"GET"
        });
        
        let _self = this;
        fetch(request)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            // console.log('parsed json', json);
            _self.setState({
                posts: json
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        })
    };

    componentWillUnmount() {

    };

    render() {
        console.log("App render")

        return (
            <MuiThemeProvider muiTheme={getMuiTheme({lightBaseTheme})}>
                <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                    <PageContainer>
                        <AppNavigator />
                        <Switch>
                            <Route exact path="/" component={PostsPage} />
                            <Route path="/post/:id" component={PostDetailPage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/me" component={AboutMe} />
                            <Route path="*" component={NotFound}/>
                        </Switch>
                        <AppFooter />
                    </PageContainer>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    };
}

export default App;
