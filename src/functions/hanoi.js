const startHanoi = (data) => {
	let arr = data.split(" ");
	let vitaminsArray = arr.map((vitamin) => {
		return {
			name: vitamin.split("")[0],
			color:  vitamin.split("")[1]
		}
	});

	let possibleColors = ["W", "G", "B"];

	let max = vitaminsArray.length+2;
	console.log(max);
	let count = 3;
	let source = vitaminsArray[0].color;
	let destination = 'W';
	let aux = possibleColors.filter((color) => {
		if (color !== source && color !== destination) {
			return true;
		}
		return false;
	})
	let movesLog = [];
	if (vitaminsArray[vitaminsArray.length-1].color !== undefined) {
		let movesLog = hanoi(max, count, source, aux, destination);
		console.log(movesLog);
		return movesLog;
	}
	return movesLog;
}

const hanoi = (max, count, source, aux, destination, moves=[]) => {
	
	if (count === max) {
		moves.push([count, source, destination]);
	}
	else {
		hanoi(max, count+1, source, destination, aux, moves);

		moves.push([count, source, destination]);
	
		hanoi(max, count+1, aux, source, destination, moves);
	}
	return moves;
};

export default startHanoi;
