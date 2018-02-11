import React, { Component } from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

class HelloWorld extends Component {
    render() {
        return React.createElement(
            'div',
            { className: 'App' },
            React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
            React.createElement(
                'h1',
                { className: 'App-title', style: { background: "grey" } },
                'Hello World!'
            )
        );
    }
}

export default HelloWorld;
