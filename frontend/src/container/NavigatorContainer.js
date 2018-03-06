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

const SelectableList = makeSelectable(List);

class NavigatorContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    };
    
	handleChange = (event, index) => {
        this.setState({
            open: false
        });
    };
    
    handleLeft = () => {
        this.setState({open: !this.state.open})
    };

    handleRight = () => {
        window.open("https://github.com/genehsun/django_project", '_blank');
    };
	
	render () {
        console.warn("NavigatorContainer render");

		return (
            <div>
                <AppBar
                    title="Wakim's Blog"
                    iconClassNameRight="muidocs-icon-custom-github" 
                    showMenuIconButton={true}
                    zDepth={0}
                    onLeftIconButtonClick={this.handleLeft}
                    onRightIconButtonClick={this.handleRight}
                    style={{ top: 0, zIndex: 10000 }} 
                 />
                <Drawer
                    open={this.state.open} 
                    docked={false}
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
                        <Subheader>关于</Subheader>
                        <ListItem primaryText="本站" leftIcon={<ActionLabel />} value="/about" containerElement={<Link to="/about" />} />
                    </SelectableList>
                </Drawer>
            </div>
		);
	}
}

function mapStateToProps(state) {
    return {
        selectedPath: state.selectedPath,
    }
}

NavigatorContainer = connect(mapStateToProps)(NavigatorContainer)

export default NavigatorContainer;

