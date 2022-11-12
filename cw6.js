// https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

function stray(numbers) {
	const obj = {};
	let result = 0;

	numbers.forEach((elem) => {
		(!obj[elem]) ? obj[elem] = 1 : obj[elem] += 1;
	})

	for (let key in obj) {
		if (obj[key] === 1) result = key;
	}

	return +result;
}