/*
	Write a function called averagePair. Given a sorted array of integers and a target average,
	determine if there is a pair of values in the array where the average of the pair
	equals the target average. There may be more tha one pair that matches the average target.

	Bonus Constraints:

	Time: O(N)
	Space: O(1)

	averagePair([1,2,3], 2.5) // true
	averagePair([1,3,3,5,6,7,10,12,19], 8) // true
	averagePair([-1,0,3,4,5,6], 4.1) // false
	averagePair([], 4) // false
*/

const assert = require('assert');

function averagePair(arr, num) {

	// if the length of arr is zero then return false
	if (arr.length === 0) {
		return false;
	}

	// take 2 pointer as start and end,
	// run a while loop where start < end
	// average start+end and if it equals num return true
	// else if the average is less then the start should be incremented
	// else if the average is more then the end should be decremented

	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		avg = (arr[start] + arr[end]) / 2;

		if (avg === num) {
			return true;
		} else if (avg < num) {
			start++;
		} else {
			end--;
		}
	}

	return false;
}

// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal(true, averagePair([1,2,3], 2.5));
assert.equal(true, averagePair([1,3,3,5,6,7,10,12,19], 8));
assert.equal(false, averagePair([-1,0,3,4,5,6], 4.1));
assert.equal(false, averagePair([], 4));
