// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
	const lengthStr = s.length;
	const errorStr = s.match(/[n-z]/g);
	const lengthEr = (errorStr !== null) ? errorStr.length : 0;
	console.log(lengthEr)

	const result = `${lengthEr}/${lengthStr}`;
	return result;
}