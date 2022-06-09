/*
	Given two strings. write a function to determine if the second string
	is an anagram of the first.

	validAnagram(''. '') // true
	validAnagram('aaz', 'zza') // false
	validAnagram('rat', 'car') // false
	validAnagram('awesome', 'awesom') // false
	validAnagram('qwerty', 'qeywrt') // true
	validAnagram('texttwisttime', 'timetwisttext')
*/
const assert = require('assert');


const validAnagram = (string1, string2) => {

	// check if both the strings are of length 0, in that case its true
	if (string1.length === 0 && string2.length === 0) {
		return true;
	}
	// check if the length of both strings are same or not, if not same then its false
	if (string1.length !== string2.length) {
		return false;
	}
	// create 2 objects string1obj and string2obj
	const string1obj = {};
	const string2obj = {};
	// convert the strings to lowercase
	string1 = string1.toLowerCase();
	string2 = string2.toLowerCase();
	// convert both the strings to an object, keys will be the char and value will the frequency
	for (let char of string1.split('')) {
		string1obj[char] = ++string1obj[char] || 1;
	}

	for (let char of string2.split('')) {
		string2obj[char] = ++string2obj[char] || 1;
	}
	// check if the key / value matches on both the object
	// iterate through string1obj and check for the same key in string2obj
	for (let key in string1obj) {
		if (!(string1obj[key] === string2obj[key])) {
			return false;
		}
	}

	return true;

}


// write test cases, if all test passes nothing will be displayed on the terminal
assert.ok(validAnagram('', ''));
assert.equal(false, validAnagram('awesome', 'awesom'));
assert.equal(false, validAnagram('aaz', 'zza'));
assert.equal(false, validAnagram('rat', 'car'));
assert.equal(true, validAnagram('qwerty', 'qeywrt'));
assert.equal(true, validAnagram('texttwisttime', 'timetwisttext'));


// optimizing the above anagram solution using frequency counter method.

const validAnagramOptimized = (string1, string2) => {
	// check if both the strings are of length 0, in that case its true
	if (string1.length === 0 && string2.length === 0) {
		return true;
	}
	// check if the length of both strings are same or not, if not same then its false
	if (string1.length !== string2.length) {
		return false;
	}
	// create 2 objects string1obj
	const string1obj = {};
	// convert the strings to lowercase
	string1 = string1.toLowerCase();
	string2 = string2.toLowerCase();
	// convert both the strings to an object, keys will be the char and value will the frequency
	for (let char of string1.split('')) {
		string1obj[char] = ++string1obj[char] || 1;
	}

	for (let char of string2.split('')) {
		// check if the character is available in strin1obj and then reduce the count from
		// string1obj. If it's an anagram then all the key values in string1obj will
		// become 0 else we will go inside the if condition and return false.
		if (!string1obj[char]) {
			return false;
		} else {
			string1obj[char]--;
		}
	}

	return true;
} 


// write test cases, if all test passes nothing will be displayed on the terminal
assert.ok(validAnagramOptimized('', ''));
assert.equal(false, validAnagramOptimized('awesome', 'awesom'));
assert.equal(false, validAnagramOptimized('aaz', 'zza'));
assert.equal(false, validAnagramOptimized('rat', 'car'));
assert.equal(true, validAnagramOptimized('qwerty', 'qeywrt'));
assert.equal(true, validAnagramOptimized('texttwisttime', 'timetwisttext'));