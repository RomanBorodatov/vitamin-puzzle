import React, { Component } from 'react';
import { stateLog } from '../functions/stateLog.js';
import Visual from './Visual';
import startHanoi from '../functions/hanoi.js';

class ThirdTask extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: '3B 4B 5B 6B',
			currentState: '',
			order: [],
			i: 0
		}

		this.handleInput = this.handleInput.bind(this);
	};

	handleInput(e){
		this.setState({
			inputValue: e.target.value 
		});
	}

	stopTimer = () => {
		clearInterval(this.timer)
	}

	changeState = currentState => {
		this.setState(prevState => ({ currentState, i: prevState.i + 1}))
	}

	componentDidMount(){
		const steps = startHanoi(this.state.inputValue);
		const order = stateLog(this.state.inputValue, steps)
		this.setState({ order })
		this.timer = setInterval(() => {
			this.changeState(order[this.state.i])
		}, 1000)
	}

	componentDidUpdate() {
	    
	    if (this.state.i >= this.state.order.length) {
	     	this.stopTimer()
	    }
  	}

	componentWillUnmount() {
    	this.stopTimer()
  	}

  	render() {
    	return (
      		<div className="third-task">
      			<h3>This is my solution for Task 3</h3>
	      		<Visual input={this.state.currentState}/>
      		</div>
    	);
  	}
}

export default ThirdTask;
