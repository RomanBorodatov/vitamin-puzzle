import React, { Component } from 'react';

class Visual extends Component {
	constructor(props){
		super(props);
		this.state = {
			figures: [],
		}

		this.generatePolygons = this.generatePolygons.bind(this);
	};

	componentDidMount() {
		let arr = data.split(" ");
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
		if(opldProps.input !== this.props.input) {
			let arr = data.split(" ");
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

  	render() {
    	return (
      		<div>
      			
      		</div>
    	);
  	}
}

export default Visual;
