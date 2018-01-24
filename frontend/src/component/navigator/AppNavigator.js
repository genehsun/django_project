import React, { Component } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider'
import ActionLabel from 'material-ui/svg-icons/action/label';
import PropTypes from 'prop-types'; 
import AppBar from 'material-ui/AppBar';
import "./AppNavigator.css";

const SelectableList = makeSelectable(List);

class AppNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, categories: [] };
    };
    
	static contextTypes = {
        selectedPath: PropTypes.string.isRequired,
        pushRouter: PropTypes.func.isRequired,
	};

	componentDidMount() {
        var url = "/api/categorys/";
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        var request = new Request(url, {
            headers: headers,
            method:"GET"
        });
        
        let _self = this;
        fetch(request)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            // console.log('parsed json', json);
            _self.setState({
                categories: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
	};

	handleChange = (event, index) => {
        this.setState({
            open: false
        });
		this.context.pushRouter(index);
    };
    
    handleLeft = () => {
        this.setState({open: !this.state.open})
    };

    handleRight = () => {
        window.open("https://github.com/genehsun/django_project", '_blank');
    };
	
	render () {
        console.warn("AppNavigator render");

		return (
            <div>
                <AppBar
                    title="Ying's Blog"
                    iconClassNameRight="muidocs-icon-custom-github" 
                    showMenuIconButton={true}
                    zDepth={0}
                    onLeftIconButtonClick={this.handleLeft}
                    onRightIconButtonClick={this.handleRight} />
                <Drawer
                    open={this.state.open} 
                    docked={false} 
                    containerClassName="drawer"
                    onRequestChange={(open) => this.setState({open})}>
                    <SelectableList
                        className="toplist"
                        value={this.context.selectedPath}
                        onChange={this.handleChange}>
                        <Subheader>首页</Subheader>
                        <ListItem primaryText="所有文章" value="/" leftIcon={<ActionLabel />} />
                        <Divider />
                        <Subheader>关于</Subheader>
                        <ListItem primaryText="本站" value="/about" leftIcon={<ActionLabel />} />
                        <ListItem primaryText="作者" value="/me" leftIcon={<ActionLabel />} />
                    </SelectableList>
                </Drawer>
            </div>
		);
	}
}
export default AppNavigator;

