// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

function pattern(n) {
	let output = "";
	let res = [];
	// Happy Coding ^_^
	if (n < 1) return output;

	for (let i = 1; i <= n; i++) {
		if (res[i - 1] !== 1) output += '\n';

		res.push(`${i} `);
		output += res[i - 1].repeat(i);

	}

	return output;
}