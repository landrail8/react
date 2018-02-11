import React, { Component } from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

class HelloWorld extends Component {
    render() {
        return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style = {{background: "grey"}}>Hello World!</h1>
        </div>
        )
    }
}

export default HelloWorld;
