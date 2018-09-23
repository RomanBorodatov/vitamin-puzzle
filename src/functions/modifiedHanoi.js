const universalHanoi = (data) => {
	let arr = data.split(" ");
	let vitaminsArray = arr.map((vitamin) => {
		return {
			name: vitamin.split("")[0],
			color:  vitamin.split("")[1],
			prevColor: ""
		}
	});

	const isWhite = (vitamin) => {
		if (vitamin.color === "W"){
			return true;
		}
	};

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

	const willBeMaxi = ((vitamin, destColor, arr) => {
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
	});

	const canBeSwaped = ((vitamin, destColor, arr) => {
		return (isMaxi(vitamin, arr) && willBeMaxi(vitamin, destColor, arr))
	});
};

universalHanoi("3B 4B 5W");