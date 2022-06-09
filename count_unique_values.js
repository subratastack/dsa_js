/*
	Implement a function called countUniqueValues,
	which accepts a sorted array, and counts the unique values
	in the array. There can be negative numbers in the array,
	but it will always be sorted.
*/

const assert = require('assert');

function countUniqueValues(arr) {

	// initialize i = 0
	let i = 0;
	let countObj = {};
	// iterate the arr and store the value in a object with key as the ith value
	// if the same no key is not present then add it to the object.
	for (i=0; i<arr.length; i++) {
		
		// countObj[arr[i]] = arr[i] === arr[j] ? countObj[arr[i]]++ : 1 || 1
		if (!countObj[arr[i]]) {
			countObj[arr[i]] = 1
		}
	}

	// get the keys from countObj and check the length of the array

	return Object.keys(countObj).length;
}


/* write test case to check the above solution,
   if nothing is printed on the console then test successfull. */
assert.equal(2, countUniqueValues([1,1,1,1,1,2]));
assert.equal(7, countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
assert.equal(0, countUniqueValues([]));
assert.equal(4, countUniqueValues([-2,-1,-1,0,1]));



// solution 2 for the same problem with 2 pointers

function countUniqueValuesUsingPointers(arr) {

	// take 2 pointer i & j
	// i = 0 and j = i + 1
	let i = 0;
	let j = i + 1;

	/* traverse the array and compare the ith and jth term,
	   if they are equal then increment the jth term,
	   if they are not equal then replace ith term with jth term,
	   also increment ith term by 1, return ith position as count.
	*/

	for (let k=0; k < arr.length; k++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		j++;
	}

	return i;
}



/* write test case to check the above solution,
   if nothing is printed on the console then test successfull. */
assert.equal(2, countUniqueValuesUsingPointers([1,1,1,1,1,2]));
assert.equal(7, countUniqueValuesUsingPointers([1,2,3,4,4,4,7,7,12,12,13]));
assert.equal(0, countUniqueValuesUsingPointers([]));
assert.equal(4, countUniqueValuesUsingPointers([-2,-1,-1,0,1]));
