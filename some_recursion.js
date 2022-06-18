/*
	Write a recursive function called someRecursion which accepts an array and a callback.
	The function returns true if a single value in the array returns true when passed to the
	callback. Otherwise it returns false.

	const isOdd = val => val % 2 !== 0;

	someRecursion([1,2,3,4], isOdd) // true
	someRecursion([4,6,8,9], isOdd) // true
	someRecursion([4,6,8], isOdd) // false
	someRecursion([4,6,8], val => val > 10) // false
*/

const assert = require('assert')

function someRecursion(arr, cb) {

	let returnVal = false;

	function someRecursionExecution(arrVal, callback) {

		if (arrVal.length === 1) {
			returnVal = callback(arrVal[arrVal.length - 1])
			return;
		}

		if (!returnVal) {
			returnVal = callback(arrVal[arrVal.length - 1])

			if (returnVal) {
				return;
			}
		}

		someRecursionExecution(arrVal.slice(0, arrVal.length - 1), callback);
	}

	someRecursionExecution(arr, cb);
	return returnVal;
}



// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successful

const isOdd = val => val % 2 !== 0;

assert.equal(true, someRecursion([1,2,3,4], isOdd))
assert.equal(true, someRecursion([4,6,8,9], isOdd))
assert.equal(false, someRecursion([4,6,8], isOdd))
assert.equal(false, someRecursion([4,6,8], val => val > 10))
