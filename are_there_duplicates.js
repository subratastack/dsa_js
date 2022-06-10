/*
	Implement a function called areThereDuplicates which accpets a variable number of arguments,
	and checks whether there are any duplicates among the arguments passed in.

	areThereDuplicates(1, 2, 3) // false
	areThereDuplicates(1, 2, 2) // true
	areThereDuplicates('a', 'b', 'c', 'a') // true

	Restrictions:

	Time: O(N)
	Space: O(N)

	Bonus:

	Time: O(n log n)
	Space: O(1)
*/

const assert = require('assert');

function areThereDuplicates() {

	// create an array from js arguments
	const input = Object.values(arguments);
	// sort the array in ascending order
	input.sort();
	// iterate throught the array and check if i-th and i+1-th element are same,
	// if same then return false
	// else increment i and check for the next combination.
	for (let i = 0; i < input.length - 1; i++) {
		if (input[i] === input[i+1]) {
			return true;
		}
	}

	return false;
}

// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal(false, areThereDuplicates(1, 2, 3));
assert.equal(true, areThereDuplicates(1, 2, 2));
assert.equal(true, areThereDuplicates('a', 'b', 'c', 'a'));
