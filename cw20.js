// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
	for (let i = 0; i < A.length; i++) {
		let cur = 0;
		for (let j = 0; j < i; j++) {
			if (A[i] === A[j]) cur++;
		}
		if (cur % 2 !== 0) return A[i];
	}
}