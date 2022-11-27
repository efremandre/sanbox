// // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// // function sortArray(array) {
// // 	const even = [];
// // 	const odd = [];

// // 	array.map(elem => (elem % 2 !== 0) ? even.push(elem) : odd.push(elem));
// // 	even.sort((a, b) => a - b);

// // 	const result = array.map(elem => (elem % 2 !== 0) ? even.shift() : odd.shift());

// // 	return result;
// // }

function sortArray(array) {

	const even = array.filter(elem => elem % 2 !== 0);

	even.sort((a, b) => a - b);

	const result = array.map(elem => (elem % 2 !== 0) ? even.shift() : elem);

	return result;
}

