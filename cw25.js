function rot13(message) {
	const setSymbol = (el) => {
		return el.toLowerCase() > 'm' && el > 'M' ? String.fromCharCode(el.charCodeAt(0) - 13) : String.fromCharCode(el.charCodeAt(0) + 13);
	}

	const result = message.replace(/[a-z]/gi, setSymbol);

	return result;
}
