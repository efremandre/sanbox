// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript

function sentence(List) {

	const tempObj = {};
	let tempStr = '';

	List.forEach(el => {
		for (let key in el) {
			tempObj[key] = el[key];
		}
	});

	const ordered = Object.keys(tempObj).sort((a, b) => a - b);

	ordered.forEach(el => tempStr += `${tempObj[el]} `);

	const result = tempStr.trim();

	return result;
}