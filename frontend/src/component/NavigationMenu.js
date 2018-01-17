import React, {Component} from 'react';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon';
import ActionLabel from 'material-ui/svg-icons/action/label';
import PropTypes from 'prop-types'; 
import AppBar from 'material-ui/AppBar';

const SelectableList = makeSelectable(List);
class NavigationMenu extends Component {
	static propTypes = {
        categories: PropTypes.array
	};
    
	static contextTypes = {
		router : PropTypes.object
	};

	style = {
		drawer: {paddingTop: "5%"}, 
		iconStyle: { marginRight: 24 }, 
		topList: {marginBottom: "3%"}
    };
    
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
	
	componentWillMount() {
		this.setState({
			selectedIndex: this.props.defaultValue,
		});
	};

	handleChange = (event, index) => {
		this.setState({ selectedIndex: index });
		// this.context.router.push(index);
    };
    
    handleToggle = () => this.setState({open: !this.state.open});
	
	render () {
		return (
            <div>
                <AppBar
                    title="Title" 
                    iconClassNameRight="muidocs-icon-custom-github" 
                    showMenuIconButton={true}
                    zDepth={0}
                    onLeftIconButtonClick={this.handleToggle} />
                <Drawer
                    open={this.state.open} 
                    docked={false} 
                    containerStyle={this.style.drawer} 
                    onRequestChange={(open) => this.setState({open})}
                    >
                    
                    <SelectableList 
                        style={this.style.topList} 
                        value={this.state.selectedIndex} 
                        onChange={this.handleChange}>
                        <Subheader>Categories</Subheader>
                        <ListItem
                            primaryText="ALL POSTS"
                            value="/posts" leftIcon={
                                <FontIcon className="material-icons"
                                    style={this.style.iconStyles}>home</FontIcon>
                            } />
                        {this.props.categories.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    primaryText={item.title}
                                    value={"/posts/" + item._id + "/1"} leftIcon={
                                        <FontIcon className="material-icons"
                                            style={this.style.iconStyles}>{item.logo}</FontIcon>
                                    } />);
                        })}
                    </SelectableList>

                    <br />
                    <Divider />

                    <SelectableList onChange={(evt, value) => { window.open(value) }}>
                        <Subheader>Links</Subheader>
                        <ListItem primaryText="GitHub" value="https://github.com/genehsun/django_project" leftIcon={<ActionLabel />} />
                    </SelectableList>
                </Drawer>
            </div>
		);
	}
}
export default NavigationMenu;

