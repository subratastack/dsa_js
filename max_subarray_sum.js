/*
	Given an array of integers and a number. write a function called maxSubarraySum,
	which finds the maximum sum of a subarray with the length of the number passed to the function.

	Note that a subarray consist of consecutive elements from the original array. In the example below,
	[100, 200, 300] is a subarray of the original array, but [100, 300] is not.

	maxSubarraySum([100, 200, 300, 400], 2) // 700
	maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
	maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
	maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
	maxSubarraySum([2,3], 3) // null

	Constraits:
	Time: O(N)
	Space: O(1)
*/

const assert = require('assert');

function maxSubarraySum(arr, num) {

	// if the length of the array is less than the num then return null
	if (arr.length < num) {
		return null;
	}

	// first find the max value that we can calculate, start from 0 to num

	let max = 0;

	for(let i = 0; i < num ; i++) {
		max += arr[i];
	}

	// iterate through the array
	// take all the numbers between arr[i] and arr[i+num]
	// each iteration remove the ith term and add arr[i+num] to the existing sum as temp
	// check if this value is more than max, if yes then replace max with this new value
	// increment i 

	let temp = max;

	for(let i=num; i<arr.length; i++) {
		
		temp = temp - arr[i-num] + arr[i];

		if (temp > max) {
			max = temp
		}
	}

	return max;
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal(null, maxSubarraySum([2,3], 3));
assert.equal(700, maxSubarraySum([100, 200, 300, 400], 2));
assert.equal(39, maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
assert.equal(5, maxSubarraySum([-3,4,0,-2,6,-1], 2))
assert.equal(5, maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2))