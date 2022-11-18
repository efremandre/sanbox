// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

function alphabetPosition(text) {
	const alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const newArr = text.toLowerCase().split('');
	const indexArr = [];


	newArr.forEach((elem) => {
		if (alphabet.indexOf(elem) !== -1) {
			indexArr.push(alphabet.indexOf(elem));
		}
	})

	let result = indexArr.join(' ');

	return result;
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))