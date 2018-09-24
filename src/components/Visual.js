import React, { Component } from 'react';

class Visual extends Component {
	constructor(props){
		super(props);
		this.state = {
			figures: [],
		}

		this.generatePolygon = this.generatePolygon.bind(this);
	};

	componentDidMount() {
		let arr = this.props.input.split(" ");
		let vitaminsArray = arr.map((vitamin) => {
			return {
				name: vitamin.split("")[0],
				color:  vitamin.split("")[1],
				prevColor: ""
			}
		});
		this.setState({figures: vitaminsArray})
	}
	componentDidUpdate(oldProps) {
		if(oldProps.input !== this.props.input) {
			let arr = this.props.input.split(" ");
			let vitaminsArray = arr.map((vitamin) => {
				return {
					name: vitamin.split("")[0],
					color:  vitamin.split("")[1],
					prevColor: ""
				}
			});
			this.setState({figures: vitaminsArray})
		}
	}

	generatePolygon = (sidesCount, color) => {
		const radius = 50;
		const angle = 0;

		const top = 100;
		const left = 100;
		const points = [];
		const fac = 2 * Math.PI / sidesCount;

		let fill = 'white'
	    if (color === 'G') {
	      fill = 'lightgrey'
	    }
	    if (color === 'B') {
	      fill = 'black'
	    }

		for (let i = 0; i < sidesCount; i++) {
			const x = left + radius * Math.cos(i * fac + angle / 180 * Math.PI);
			const y = top + radius *Math.sin(i * fac + angle / 180 * Math.PI);
			points.push(`${x},${y}`);
		}
		const path = points.join(' ');

		return (
			<svg width={200} height={200} fill={fill} stroke='#111' strokeWidth='1' key={sidesCount}>
      			<polygon points={path}/>
      		</svg>
      	)
	};

  	render() {
    	return (
      		<div>
      			{this.state.figures.map((figure) => {
      		 		return this.generatePolygon(figure.name, figure.color)
      			})}
      		</div>
    	);
  	}
}

export default Visual;
