// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

const suspectInfo = {
	'James': ['Jacob', 'Bill', 'Lucas'],
	'Johnny': ['David', 'Kyle', 'Lucas'],
	'Peter': ['Lucy', 'Kyle']
};

const dead = ['Lucas', 'Bill'];

function killer(suspectInfo, dead) {

	let result = '';
	let current = 0;

	for (let key in suspectInfo) {
		const value = suspectInfo[key];

		value.forEach(el => {
			if (dead.indexOf(el) !== -1) {
				current += 1;
				if (current === dead.length) {
					result = key;
					return result;
				}
			}
		})
	}

	return result;
}

console.log(killer(suspectInfo, dead))