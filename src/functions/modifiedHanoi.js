const canBeSwaped = (vitamin, destColor, arr) => {
	
	const isMaxi = (vitamin, arr) => {
		let color = vitamin.color;
		let num = vitamin.name

		let toCheck = arr.filter((item) => {
			if (item.color === color && +item.name > +num) {
				return true;
			}
			return false
		});

		if (toCheck.length != 0){
			return false
		}
		return true
	}

	const willBeMaxi = (vitamin, destColor, arr) => {
		let num = vitamin.name;

		let toCheck = arr.filter((item) => {
			if(item.color === destColor && +item.name > +num) {
				return true;
			}
			return false
		});

		if (toCheck.length != 0){
			return false
		}
		return true
	};

	return (isMaxi(vitamin, arr) && willBeMaxi(vitamin, destColor, arr))
};

const determineDestColor = (vitamin, destColor) => {
	const possibleColors = ['W', 'G', 'B'];
	if (destColor === 'W'|'G'|'B'){
		return destColor;
	}
	else {
		let newPossibleColors = possibleColors.filter((color) => {
			if (color != vitamin.color && color != vitamin.prevColor){
				return true;
			}
			return false
		})
		return newPossibleColors[0];	
	}
};

const colorSwap = (vitamin, destColor, arr) => {
	destColor = determineDestColor(destColor);
	if (canBeSwaped(vitamin, destColor, arr) && destColor != vitamin.prevColor) {
		const newArr = arr.map((item) => {
			if (item.name === vitamin.name) {
				item = { ...item, prevColor: item.color, color: destColor};
			}
			return item;
		});
		return newArr;
	}
	return false;
}

const isWhite = (vitamin) => {
	if (vitamin.color === "W"){
		return true;
	}
};

const transformData = (data) => {
	let arr = data.split(" ");
	let vitaminsArray = arr.map((vitamin) => {
		return {
			name: vitamin.split("")[0],
			color:  vitamin.split("")[1],
			prevColor: ""
		}
	});
	return vitaminsArray;
}

const universalHanoi = (data) => {
		
};

console.log(transformData("3B 4G 5B"));