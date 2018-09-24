import React, { Component } from 'react';
import Visual from './Visual.js';

class SecondTask extends Component {
  render() {
    return (
      <div className="second-task">
      	Second!
      	<Visual input="3B 4B 5B"/>
      </div>
    );
  }
}

export default SecondTask;
