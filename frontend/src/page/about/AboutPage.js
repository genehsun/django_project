import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import "./About.css";

class AboutPage extends Component {

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.context.changeSelectedPath("/about", "关于本站");
    };

    render() {
        console.warn("AboutPage render");

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">About React</p>
            </div>
        );
    };
}

export default AboutPage;