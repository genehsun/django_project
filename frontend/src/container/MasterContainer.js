import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider'
import ActionLabel from 'material-ui/svg-icons/action/label';
import PropTypes from 'prop-types'; 
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { getVersions } from '../action';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../container/AboutContainer';
import NotFound from '../component/NotFound';
import AppFooter from '../component/AppFooter';
import BlogContainer from '../container/BlogContainer';
import CategoryContainer from '../container/CategoryContainer';
import DetailContainer from '../container/DetailContainer';
import { fetchCategories } from '../action';

const SelectableList = makeSelectable(List);

class MasterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false, open: false, docked: false, categories: [] };
    };

    onWindowResize = () => {
        const versions = getVersions();
        if (versions.mobile 
        || versions.ios 
        || versions.android 
        || versions.iPhone 
        || versions.iPad) {        
            console.log('mobile');
            this.setState({ open: false, docked: false, isMobile: true });
        } else {
            console.log('pc');
            this.setState({ open: true, docked: true, isMobile: false });
        }
    };
    
	handleChange = (event, index) => {
        if (this.state.isMobile) {
            this.setState({
                open: false
            });
        }
    };
    
    handleLeft = () => {
        if (this.state.isMobile) {
            this.setState({open: !this.state.open})
        }
    };

    handleRight = () => {
        window.open("https://github.com/genehsun/django_project", '_blank');
    };

    componentDidMount() {
        this.props.dispatch(fetchCategories());
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        debugger;
        window.removeEventListener('resize', this.onWindowResize);
    };
	
	render () {
        console.warn("MasterContainer render");

        var mobileStyle = {
            paddingTop: '16%'
        }

        var pcStyle = {
            paddingLeft: '17.8%',
            paddingTop: '4%'
        }

        if (this.props.isFetching) {
            return (<div />)
        } else {
            return (
                <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                    <div>
                        <AppBar
                            title="Wakim's Blog"
                            iconClassNameRight="muidocs-icon-custom-github" 
                            showMenuIconButton={true}
                            zDepth={0}
                            onLeftIconButtonClick={this.handleLeft}
                            onRightIconButtonClick={this.handleRight}
                            style={{ position: 'fixed', top: 0, zIndex: 10000 }} 
                        />
                        <Drawer
                            open={this.state.open} 
                            docked={this.state.docked}
                            containerStyle={{ top: 56 }}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <SelectableList
                                value={this.props.selectedPath.path}
                                onChange={this.handleChange}
                            >
                                <Subheader>首页</Subheader>
                                <ListItem primaryText="所有文章" leftIcon={<ActionLabel />} value="/" containerElement={<Link to="/" />} />
                                <Divider />
                                <Subheader>分类</Subheader>
                                {this.props.categories.map((item, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            primaryText={item.title}
                                            leftIcon={<ActionLabel />}
                                            value={"/category/" + item.id}  
                                            containerElement={<Link to={"/category/" + item.id} />} />);
                                })}
                                <Divider />
                                <Subheader>关于</Subheader>
                                <ListItem 
                                    primaryText="站点介绍" 
                                    leftIcon={<ActionLabel />} 
                                    value="/about" 
                                    containerElement={<Link to="/about" />} />
                            </SelectableList>
                        </Drawer>
                        <div style={this.state.isMobile ? mobileStyle : pcStyle}>
                            <Switch>
                                <Route exact path="/" component={BlogContainer} />
                                <Route path="/category/:id" component={CategoryContainer} />
                                <Route path="/post/:id" component={DetailContainer} />
                                <Route path="/about" component={AboutContainer} />
                                <Route path="*" component={NotFound}/>
                            </Switch>
                            <AppFooter />
                        </div>
                        
                    </div>
                </BrowserRouter>
            );
        }
	}
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.categories.items && state.categories.items.length !== 0) {
        isFetching = false;
    }

    return {
        isFetching,
        categories: state.categories.items,
        selectedPath: state.selectedPath,
    }
}

MasterContainer = connect(mapStateToProps)(MasterContainer)

export default MasterContainer;

