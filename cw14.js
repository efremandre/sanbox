// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

	const currentMsec = Date.parse(currentDate);
	const expirationMsec = Date.parse(expirationDate);

	return (enteredCode === correctCode && currentMsec <= expirationMsec) ? true : false;
}