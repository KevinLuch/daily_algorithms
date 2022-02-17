// Create a function that takes two strings as arguments 
// and returns the number of times the first sting 
// (the single character) is found in the second string

// Examples:

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// **************************************************************

function charCount(myChar, str) {
	var count = 0
	for (var i= 0; i < str.length; i++){
		if(str[i] == myChar)
			count++
	}
	return count 
}

// **************************************************************