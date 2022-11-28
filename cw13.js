// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

function vowelOne(s) {
	const arr = s.toLowerCase().split('');

	let result = '';

	arr.forEach(e => {
		(e.match(/^[aeiou]/g)) ? result += 1 : result += 0;
	})

	return result;
}