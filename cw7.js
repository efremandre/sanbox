// https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
	const newArr = []

	if (arr.length === 0) return 0;
	arr.forEach((elem) => {
		if (elem.match(/[:;][-~][D)]/g) || elem.match(/[:;][D)]/g)) newArr.push(elem);
	})

	const result = newArr.length

	return result;
}