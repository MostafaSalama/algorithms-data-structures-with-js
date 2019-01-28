function swap(array, i, j) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

/**
 * a simple bubble sort function
 * space complexity : O(1)
 * Time complexity:  O(2)
 * @param array {Array}
 * @returns {Array}
 */
function bubbleSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j <= i; j++) {
			if (array[i] < array[j]) {
				swap(array, i, j);
			}
		}
	}
	return array;
}

/**
 *  selection sort selects the minimum value and swaps it
 *  Time Complexity: O(n2)
 *  Space Complexity: O(1)
 * @param array {Array}
 * @returns {Array}
 */
function selectionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		let min = i; // set the minimum value
		for (let j = i + 1; j < length; j++) {
		    // check for the minimum value
			if (array[j] < array[min]) {
				min = j;
			}
		}
		// change the position of the current minimum value
		if (i !== min) {
			swap(array, i, min);
		}
	}
	return array;
}
