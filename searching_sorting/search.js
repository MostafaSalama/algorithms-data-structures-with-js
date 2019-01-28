// searching is very Important topic
// linear search

/**
 * go through each element in the array
 * returns true if the second argument exists in the array
 * otherwise returns false
 * @param array {Array}
 * @param n
 * @returns {boolean}
 */
function linearSearch(array, n) {
	for (let element of array) {
		if (element === n) {
			return true;
		}
	}
	return false;
}

console.log(linearSearch([4, 5, 65, 6, 7, 12], 7)); // true
console.log(linearSearch([4, 5, 65, 6, 7, 12], 9)); // false
