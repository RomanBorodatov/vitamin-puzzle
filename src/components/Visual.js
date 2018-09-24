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

	generatePolygon = () => {

	};

  	render() {
    	return (
      		<div>
      			
      		</div>
    	);
  	}
}

export default Visual;
