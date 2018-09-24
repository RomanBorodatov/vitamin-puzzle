import { transformData, colorSwap } from './functions.js';

export const stateLog = (data, operations) => {
	let vitaminsArray = transformData(data);

	const statesArr = [data];

	const a = operations.map( operation => {
		vitaminsArray = colorSwap(vitaminsArray[operation[0] - 3], operation[2], vitaminsArray);
		return vitaminsArray;
	})
	
	a.forEach(item => {
		let stringArr = item.map(obj => {
			return `${obj.name}${obj.color}`
		})
		statesArr.push(stringArr.join(' '));
	})

	return statesArr;
};