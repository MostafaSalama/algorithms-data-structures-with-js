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

// operations in sets

// adding values

set.add('this is a new value') ;

// to remove

set.delete(3) ;

// to contain specific value

set.has(5) ; // O(1)
