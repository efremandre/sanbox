const romanToInt = function (s) {
	const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	const digits = Object.keys(values);

	s = s.toUpperCase();
	let res = 0;

	for (let i = 0; i < s.length; i++) {

		if (digits.indexOf(s[i]) < digits.indexOf(s[i + 1])) {

			res -= values[s[i]];
			console.log(res)
		} else {
			res += values[s[i]];
			console.log(res)
		}
	}

	return res;
};

console.log(romanToInt('IV'))