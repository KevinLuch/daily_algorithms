// Create a function that takes two arguments. Both arguments
// are integers, a and b. Return true if one of them 10 or
// if their sum is 10

// Examples:
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

// **************************************************************
function makesTen(a, b) {
	if(a + b === 10 || a === 10 || b === 10) {
		return true
	}else{
		return false 
	}
}

// **************************************************************