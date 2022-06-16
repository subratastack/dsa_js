/*
	Write a recursive function called reverse which accepts a string and returns a new string in reverse.

	reverse('awesome') // 'emosewa'
	reverse('rithmschool') // 'loohcsmhtir'
*/

const assert = require('assert');


function reverse(str) {

	let newReverse = []

	// if the length of the string is 1 then return the same
	if (str.length === 1) {
		return str;
	}

	newReverse.push(str.substring(str.length - 1))

	newReverse = newReverse.concat(reverse(str.slice(0, str.length - 1)));
	return newReverse.join('');

}



// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successfull

assert.equal('emosewa', reverse('awesome'))
assert.equal('loohcsmhtir', reverse('rithmschool'))
