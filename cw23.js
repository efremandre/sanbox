// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
	const temp = url.split(/[/.]/);
	let result = '';

	switch (true) {
		case temp[0] !== 'www' && temp[0] !== 'https:' && temp[0] !== 'http:':
			result = temp[0];
			break;

		case temp[1] !== 'www' && temp[1] !== '' && temp[1].length > 3:
			result = temp[1]
			break;

		case temp[2] !== 'www' && temp[2] !== '':
			result = temp[2]
			break;

		default:
			result = temp[3]
			break;
	}

	return result;
}