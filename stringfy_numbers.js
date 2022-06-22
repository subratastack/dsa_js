/*
	Write a function called stringfyNumbers which takes in an object and finds all of
	the values which are numbers and converts themto strings.

	let obj = {
	    num: 1,
	    test: [],
	    data: {
	        val: 4,
	        info: {
	            isRight: true,
	            random: 66
	        }
	    }
	}

	stringifyNumbers(obj)

	{
	    num: "1",
	    test: [],
	    data: {
	        val: "4",
	        info: {
	            isRight: true,
	            random: "66"
	        }
	    }
	}
*/

const assert = require('assert');

function stringifyNumbers(obj) {

	function stringifyNumbersExecution(o) {

		for (const [key, value] of Object.entries(o)) {

			if (typeof value === 'number') {
				o[key] = String(value);
			} else {
				stringifyNumbersExecution(value)
			}
		}

		return o;
	}

	return stringifyNumbersExecution(obj);
}


// write test case to test the above code
// if there is nothing displayed on terminal then the test cases were successful

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

assert.deepEqual({
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}, stringifyNumbers(obj));

