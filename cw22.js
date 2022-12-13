// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
	const newArr = word.split('');
	let result = [];

	newArr.map((el, i) => {
		if (el.toLowerCase() !== el) result.push(i);
	})

	return result;
};

