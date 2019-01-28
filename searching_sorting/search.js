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

// a better search with binary search O(log(n))
/**
 *  a simple binary search function
 *  returns the index of the element if it exists in the array
 *  otherwise returns -1
 * @param array {Array}
 * @param n
 * @returns {number}
 */
function binarySearch(array, n) {
	let lowIndex = 0,
		highIndex = array.length - 1;
	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((highIndex + lowIndex) / 2);
		if (array[midIndex] === n) {
			return midIndex;
		} else if (n > array[midIndex]) {
			lowIndex = midIndex;
		} else {
			highIndex = midIndex;
		}
	}
	return -1;
}
console.log(binarySearch([2,5,6,7,8,9,13],6)) ;