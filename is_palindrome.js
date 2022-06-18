/*
	Write a recursive function called isPalindrome which returns true if the string passed to it
	is a palindrome (reads same backward and forward). Otherwise it is false.

	isPalindrome('awesome') // false
	isPalindrome('foobar') // false
	isPalindrome('tacocat') // true
	isPalindrome('amanaplanacanalpanama') // true
	isPalindrome('amanaplanacanalpandemonium') // false
*/

const assert = require('assert');

function isPalindrome(str) {

	let first_half = '';
	let second_half = '';

	// check if the number of characters in the string is odd or even and divide the number by 2
	if (str.length % 2 === 0) {
		first_half = str.substring(0, (str.length / 2))
		second_half = str.substring((str.length / 2), str.length)
	} else {
		first_half = str.substring(0, (str.length - 1) / 2)
		second_half = str.substring((str.length / 2), str.length)
	}

	// pure recursive, reverse the string
	function palindromeExecution(first_half) {

		let palindromeArray = []

		if (first_half.length === 1) {
			return first_half;
		}

		palindromeArray.push(first_half.substring(first_half.length - 1))

		palindromeArray = palindromeArray.concat(palindromeExecution(first_half.slice(0, first_half.length - 1)));

		return palindromeArray.join('');
	}

	// if the first part and the second part are same.
	// if even length words then direct compare
	// if odd then remove the first char from the second_half as that is the middle character

	if (str.length % 2 === 0) {
		return palindromeExecution(first_half) === second_half
	} else {
		return palindromeExecution(first_half) === second_half.substring(1, second_half.length)
	}

}

// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal(false, isPalindrome('awesome'))
assert.equal(false, isPalindrome('foobar'))
assert.equal(true, isPalindrome('amanaplanacanalpanama'))
assert.equal(true, isPalindrome('tacocat'))
assert.equal(false, isPalindrome('amanaplanacanalpandemonium'))
