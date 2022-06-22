/*
	Write a recursive function called flatten which accepts an array of arrays and returns
	a new array with all values flattened.

	flatten([1,2,3, [4,5]]) // [1,2,3,4,5]
	flatten([1, [2, [3, 4], [[5]]]]) // [1,2,3,4,5]
*/

const assert = require('assert');

function flatten(arr) {

	return arr.reduce((cv, acc) => {

		function flattenExecution(cv) {

			let newArray = [];

			if (cv.length === 1) {
				return cv;
			}

			
		}

	}, []);
}



// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successful

assert.equal([1,2,3,4,5], flatten([1,2,3,[4,5]]))
