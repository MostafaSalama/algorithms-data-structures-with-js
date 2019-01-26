/*
    sets is used for storing unique elements
 */

const set = new Set();

set.add(5);
set.add(2);
set.add(3);
set.add(5); // this will not be added

set.forEach(value => {
	console.log(value);
});
