// Create a function to return the amount of potatoes
// there are in a string
// Examples:
// - potatoes("potato") ➞ 1
// - potatoes("potatopotato") ➞ 2
// - potatoes("potatoapple") ➞ 1
// **************************************************************

function potatoes(str) {
	var arr = str.split("potato")
	return arr.length-1
}

// **************************************************************