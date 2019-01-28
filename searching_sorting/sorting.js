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

function quickSort(items) {
	return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
	let index;
	if (items.length > 1) {
		index = partition(items, left, right);

		if (left < index - 1) {
			quickSortHelper(items, left, index - 1);
		}

		if (index < right) {
			quickSortHelper(items, index, right);
		}
	}
	return items;
}

function partition(array, left, right) {
	let pivot = array[Math.floor((right + left) / 2)];
	while (left <= right) {
		while (pivot > array[left]) {
			left++;
		}
		while (pivot < array[right]) {
			right--;
		}
		if (left <= right) {
			const temp = array[left];
			array[left] = array[right];
			array[right] = temp;
			left++;
			right--;
		}
	}
	return left;
}

/*
	count sort for a limited range of integers
	O(k+N)
	O(k)
 */
function countSort(array) {
	const hash = {},
		countArr = [];
	for (let i = 0; i < array.length; i++) {
		if (!hash[array[i]]) {
			hash[array[i]] = 1;
		} else {
			hash[array[i]]++;
		}
	}

	for (let key in hash) {
		// for any number of _ element, add it to array
		for (let i = 0; i < hash[key]; i++) {
			countArr.push(parseInt(key));
		}
	}
	return countArr;
}

