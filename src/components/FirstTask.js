import React, { Component } from 'react';

import startHanoi from '../functions/hanoi.js';

class FirstTask extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: ''
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
	      <div className="first-task">
	      	<h3>This is my solution for Task 1(B)</h3>
	      	<p>It is based on recursive Hanoi Towers solution. This method has 2 huge disadvantages:</p>
	      	<ul>
	      		<li>It works only if we will manually wich color groupr are Source\Temp\Destination</li>
	      		<li>It works only if all vitamins have same color at the initial state</li>
	      	</ul>

	      	<input type='text' value={this.state.inputValue} onChange={this.handleInput} placeholder="Input initial state"/>
	      	<ol>
	      		<div>
	      			{startHanoi(this.state.inputValue).map((item, i) => {
	      				return (<li key={i}>{item[0] + " from " + item[1] + " to " + item[2]}</li>)
	      			})}
	      		</div>
	      	</ol>
	      </div>
	    );
	}
}

export default FirstTask;
