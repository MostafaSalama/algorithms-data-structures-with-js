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

