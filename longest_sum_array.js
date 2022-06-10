/*
	Write a functiion called maxSubarraySum which accepts
	and array of integers and a number called n.
	The function should calculate the max sum of n consecutive
	elements in the array.
*/

const assert = require('assert');

function maxSubarraySum(arr, num) {

	// if the length of arr is empty then return null
	if (arr.length === 0) {
		return null
	}
	// take i = 0 and then sum the next 3 array elements
	// if the value is more than temp variable then assign
	let count = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {

		let temp = 0;
		for (let j = i; j < i + num; j++) {
			temp += arr[j];
		}

		if (count < temp) {
			count = temp;
		}
	}
	// the new value to temp.
	// return the sum

	return count;
}



// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull


assert.equal(10, maxSubarraySum([1,2,5,2,8,1,5], 2));
assert.equal(17, maxSubarraySum([1,2,5,2,8,1,5], 4));
assert.equal(6, maxSubarraySum([4,2,1,6], 1));
assert.equal(13, maxSubarraySum([4,2,1,6,2], 4));
assert.equal(null, maxSubarraySum([], 2));



/* 
	the problem with the above solution is that
   there is a nested loops which makes the solution quadratic.
*/

/*
	there is another way to solve this problem i.e. using sliding window
*/


function maxSubarraySumUsingSlidingWindow(arr, num) {

	// check if the array is empty and return null
	if (arr.length === 0) {
		return null;
	}

	// take 2 variable max & temp
	let max = 0;
	let temp = 0;
	// iterate the array and check the sum from i to num
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}

	// on each iteration subtract i-num and add ith term
	// check if the new sum is greater then max variable, then update max variable

	temp = max;

	for (let i=num; i < arr.length; i++) {
		temp = temp - arr[i-num] + arr[i];

		if (temp > max) {
			max = temp
		}
	}

	return max;
}

// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull


assert.equal(10, maxSubarraySumUsingSlidingWindow([1,2,5,2,8,1,5], 2));
assert.equal(17, maxSubarraySumUsingSlidingWindow([1,2,5,2,8,1,5], 4));
assert.equal(6, maxSubarraySumUsingSlidingWindow([4,2,1,6], 1));
assert.equal(13, maxSubarraySumUsingSlidingWindow([4,2,1,6,2], 4));
assert.equal(null, maxSubarraySumUsingSlidingWindow([], 2));
