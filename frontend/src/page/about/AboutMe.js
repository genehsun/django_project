import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import "./About.css";

class AboutMe extends Component {
    
    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.context.changeSelectedPath("/me", "关于作者");
    };

    render() {
        console.warn("AboutMe render");

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">About Me</p>
            </div>
        );
    };
}

export default AboutMe;