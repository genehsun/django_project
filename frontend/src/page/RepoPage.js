import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class RepoPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello Repo
        </p>
      </div>
    );
  }
}

export default RepoPage;