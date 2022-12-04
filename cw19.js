// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

function sortMyString(S) {

	const tempArr = S.split('');
	let evenStr = '';
	let oddStr = '';

	tempArr.forEach((el, i) => {
		(i % 2 === 0) ? oddStr += el : evenStr += el;
	})

	const result = `${oddStr} ${evenStr}`;


	return result;
}