import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './apps/HelloWorld/HelloWorld';
import Clock from './apps/Clock/Clock';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('HelloWorld'));
ReactDOM.render(<Clock />, document.getElementById('Clock'));

// registerServiceWorker();
