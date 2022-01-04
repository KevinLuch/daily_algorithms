// Create a function that takes an array of non-negative integers
// and strings and return a new array without the strings

// **************************************************************

function filterArray(arr) {
	var newArr = []
	
	for(var i=0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			newArr.push(arr[i])
		} 
	}
	
	return newArr
}

// **************************************************************