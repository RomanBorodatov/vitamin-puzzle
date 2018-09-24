export const canBeSwaped = (vitamin, destColor, arr) => {
	
	const isMaxi = (vitamin, arr) => {
		let color = vitamin.color;
		let num = vitamin.name

		let toCheck = arr.filter((item) => {
			if (item.color === color && +item.name > +num) {
				return true;
			}
			return false
		});

		if (toCheck.length !== 0){
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

		if (toCheck.length !== 0){
			return false
		}
		return true
	};

	return (isMaxi(vitamin, arr) && willBeMaxi(vitamin, destColor, arr) && vitamin.prevColor !== destColor)
};

export const colorSwap = (vitamin, destColor, arr) => {
	const newArr = arr.map((item) => {
		if (item.name === vitamin.name) {
			item = { ...item, prevColor: item.color, color: destColor};
		}
		return item;
	});
	return newArr;
}

// const isWhite = (vitamin) => {
// 	if (vitamin.color === "W"){
// 		return true;
// 	}
// };

export const transformData = (data) => {
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