// Given two integers, a and b, return true if a can be
// divided evenly by b. Return false otherwise.

// ** a will always be greater than or equal to b.

// Examples:

// dividesEvenly(98, 7) ➞ true
// dividesEvenly(85, 4) ➞ false

// **************************************************************

function dividesEvenly(a, b) {
	var num_1 = a;
	var num_2 = b;
	if(num_1 % num_2 == 0 ){
		return true
	}
	
	return false 
}

// **************************************************************