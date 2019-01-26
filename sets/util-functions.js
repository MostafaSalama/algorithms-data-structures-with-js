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

module.exports = {
    intersectSets,
};
