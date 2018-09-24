import React, { Component } from 'react';
import Visual from './Visual.js';

class SecondTask extends Component {
  	constructor(props){
		super(props);
		this.state = {
			inputValue: '3W 4B 5G'
		}

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e){
		this.setState({
			inputValue: e.target.value
		});
	}
 	
 	render() {
    	return (
    		<div className="second-task">
      			<h3>This is my solution for Task 2</h3>
	      		<input type='text' value={this.state.inputValue} onChange={this.handleInput} placeholder="Input initial state"/>
      			<Visual input={this.state.inputValue}/>
      		</div>
    	);
  	}
}

export default SecondTask;
