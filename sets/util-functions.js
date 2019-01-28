/***
 * takes two sets and return a new one with the
 * @param setA {Set}
 * @param setB {Set}
 * @return {Set} a set with the intersected elements in the two sets
 */
function intersectSets(setA, setB) {
	const intersection = new Set();
	for (let element of setB) {
		if (setA.has(element)) {
			intersection.add(element);
		}
	}
	return intersection;
}

/**
 *  function takes two sets and return true
 *  if the second is a subset of the first
 *  else returns false
 * @param setA {Set}
 * @param subset {Set}
 * @return {Boolean}
 */
function isSuperSet(setA, subset) {
	for (let element of subset) {
		if (!setA.has(element)) return false;
	}
	return true;
}

/**
 * returns the union of two sets
 * @param setA {Set}
 * @param setB {Set}
 * @return {Set}
 */
function unionSet(setA, setB) {
	const union = new Set(setA);
	for (let e of setB) {
		if (!union.has(e)) {
			union.add(e);
		}
	}
	return union;
}

/**
 * returns the difference between two sets
 * @param setA {Set}
 * @param setB {Set}
 * @return {Set}
 */
function differenceSet(setA, setB) {
	let difference = new Set(setA);
	for (let e of setB) {
		difference.delete(e);
	}
	return difference;
}
module.exports = {
	intersectSets,
	isSuperSet,
	unionSet,
	differenceSet,
};
