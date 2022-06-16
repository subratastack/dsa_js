/*
	Write a function called isSubsequence which takes in two strings and checks whether
	the characters in the first string form a subsequence of the characters in the second string.
	In other words, the function should check whether the characters in the first string
	appear somewhere in the second string, without their order changing.

	Your solution MUST have AT LEAST the following complexities:
	Time: O(M+N)
	Space: O(1)

	isSubsequence('hello', 'hello world') // true
	isSubsequence('sing', 'sting') // true
	isSubsequence('abc', 'abracadabra') // true
	isSubsequence('abc', 'acb') // false (order matters)
*/

const assert = require('assert');

function isSubsequence(str1, str2) {

	// take 2 pointers i and j
	// iterate str2 and check:
	// if str1[i] === str2[j], then increment i and then also increment j
	// when i and the length of str1 is equal return true

	let i = 0;
	let j = 0;

	while (j < str2.length) {
		if (str1[i] === str2[j]) {
			i++;
		}

		if (i === str1.length){
			return true;
		}

		j++;
	}

	return false;
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull


assert.equal(true, isSubsequence('hello', 'hello world'));
assert.equal(true, isSubsequence('sing', 'sting'));
assert.equal(true, isSubsequence('abc', 'abracadabra'));
assert.equal(false, isSubsequence('abc', 'acb'));
