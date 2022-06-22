/*
	Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter
	of each string in the array.

	capitalizeFirst(['car', 'taco', 'banana']) // ['Car', 'Taco', 'Banana']
*/

const assert = require('assert');

function capitalizeFirst(arr) {

	let capArr = [];

	if (arr.length === 0) {
		return [];
	}

	let element = arr[0];
	capArr.push(element.charAt(0).toUpperCase() + element.substring(1));

	capArr = capArr.concat(capitalizeFirst(arr.slice(1, arr.length)));
	return capArr;
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.deepEqual(['Car', 'Taco', 'Banana'], capitalizeFirst(['car', 'taco', 'banana']));
