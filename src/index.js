module.exports = function reverse (n) {
	const nToString = '' + Math.abs(n);
	return Number(nToString.split('').reverse().join(''));
}
