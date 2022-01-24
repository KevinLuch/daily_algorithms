// Write a function that return the length of a string.
// Make your function recursive.

// Examples:

// - length("apple") ➞ 5
// - length("make") ➞ 4
// - length("a") ➞ 1
// - length("") ➞ 0

// **************************************************************
function length(str) {
	if(str == "")
		return 0;
	else
		return length(str.substring(1)) + 1;
}

// **************************************************************