// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
	const stringToArr = string.split(' ');
	const reversedElem = stringToArr.map(el => (el.length >= 5) ? el.split('').reverse().join('') : el);
	const result = reversedElem.join(' ');

	return result;
}