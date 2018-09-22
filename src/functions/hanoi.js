const hanoi = (max, source, aux, destination, moves=[], count = 3) => {
	
	if (count === max) {
		moves.push([count, source, destination]);
	}
	else {
		hanoi(max, source, destination, aux, moves, count+1);

		moves.push([count, source, destination]);
	
		hanoi(max, aux, source, destination, moves, count+1);
	}
	return moves;
};

result = hanoi(6, "B", "G", "W");
console.log(result);
