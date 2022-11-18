// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

// function alphabetPosition(text) {
// 	const alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// 	const newArr = text.toLowerCase().split('');
// 	const indexArr = [];


// 	newArr.forEach((elem) => {
// 		if (alphabet.indexOf(elem) !== -1) {
// 			indexArr.push(alphabet.indexOf(elem));
// 		}
// 	})

// 	let result = indexArr.join(' ');

// 	return result;
// }

function alphabetPosition(text) {
	let result = ''
	const newArr = text.toLowerCase().replace(/[^a-z]/g, '').split(''); // удалил все не буквенные символы

	newArr.forEach(e => {
		result += `${e.charCodeAt(0) - 96} `;
	}); // соотнес буквы с их юникодом. Юникод символа "а" = 97, 97-96 = 1, что соотносится с позицией "а" в алфавите, вычел 96 из каждого символа в массиве

	return result.trim(); // trim() удаляет пробел в начале и в конце строки
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))