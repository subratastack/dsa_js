/*
	Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an
	object which may contain nested objects.

	var obj1 = {
	  outer: 2,
	  obj: {
	    inner: 2,
	    otherObj: {
	      superInner: 2,
	      notANumber: true,
	      alsoNotANumber: "yup"
	    }
	  }
	}

	var obj2 = {
	  a: 2,
	  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
	  c: {c: {c: 2}, cc: 'ball', ccc: 5},
	  d: 1,
	  e: {e: {e: 2}, ee: 'car'}
	};

	nestedEvenSum(obj1); // 6
	nestedEvenSum(obj2); // 10
*/

const assert = require('assert');

function nestedEvenSum(obj) {

	let sum = 0;

	function nestedEvenSumExecution(o) {
		for (const [key, value] of Object.entries(o)) {

			if (typeof value === 'object' &&  value !== null) {
				nestedEvenSumExecution(value);
			} else if (typeof value === 'number' && value%2 === 0) {
				sum += value;
			}
		}
	}

	nestedEvenSumExecution(obj);

	return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successful

assert.equal(6, nestedEvenSum(obj1))
assert.equal(10, nestedEvenSum(obj2))
