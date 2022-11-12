// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr) {
	const result = [];
	arr.forEach((elem, index) => {
		if (index % 2 === 0) result.push(elem);
	})

	return result;
}

