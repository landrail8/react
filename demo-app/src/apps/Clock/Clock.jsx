import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.clockLauncher();
  }

  clockLauncher() {
    setInterval(()=> {
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000);
  }

  render() {
    return <div>{this.state.currentTime}</div>
    }
}

export default Clock;
