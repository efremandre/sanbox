// https://www.codewars.com/kata/569d488d61b812a0f7000015/javascript

function dataReverse(data) {

	const size = 4;
	const accum = [];

	for (let i = 0; i < data.length; i += size) {
		accum.push(data.slice(i, i + size).reverse());
	}

	const result = accum.flat();

	return result;
}