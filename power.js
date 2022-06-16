/*
	Write a function called power which accepts a base and an exponent.
	The function should return the power of the base to the exponent.
	This function should mimic the functionality of Math.pow().
	Do not worry about negative bases and exponents.

	power(2,0) // 1
	power(2,2) // 4
	power(2,4) // 16
*/

const assert = require('assert');

function power(base, expo) {

	// if expo is 0 return 1
	if (expo === 0) {
		return 1;
	}

	// recursion
	return base * power(base, expo - 1);
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal(1, power(2,0));
assert.equal(4, power(2,2));
assert.equal(16, power(2,4));
