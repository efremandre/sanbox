// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/javascript

// Sum Numbers
function sum(numbers) {
	"use strict";
	let summ = 0;

	numbers.map(elem => {
		summ += elem;
	})

	return summ;
};