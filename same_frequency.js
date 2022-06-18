/*
	Write a function called sameFrequency. Given two positive integers.
	find out if the two numbers have the same frequency of digits.
	Your solution MUST have the following complexities:

	Time: O(N)

	sameFrequency(182, 281) // true
	sameFrequency(34, 14) // false
	sameFrequency(3589578, 5879385) // true
	sameFrequency(22, 222) // false
*/

const assert = require('assert');

function sameFrequency(num1, num2) {

	// if the length of both are not same then return false
	if (num1.toString().length !== num2.toString().length) {
		return false;
	}
	let num1Object = {};
	// take num1 and create a object named num1Object with key as number and frequency as value
	for (let num of num1.toString().split('')) {
		num1Object[num] = ++num1Object[num] || 1;
	}
	/* 
		iterate num2 and each time we get the same number as num1 key,
		we will reduce the count from num1Object, if all key value of num1Object is 0,
		then both number has same frequency, return true
	*/
	for (let num of num2.toString().split('')) {

		if (num1Object[num]) {
			num1Object[num]--;
		} else {
			return false
		}
	}

	return true;
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successful

assert.equal(false, sameFrequency(22, 222));
assert.equal(true, sameFrequency(182, 281));
assert.equal(true, sameFrequency(3589578, 5879385));
assert.equal(false, sameFrequency(34, 14));
