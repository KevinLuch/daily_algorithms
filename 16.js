// Create a function that calculates the number of different
// squares in an n * n square grid

// **************************************************************

function numberSquares(n) {
	let result = 0;
	let square = 0; 
	for(let i=n; i>0; i--){	
		square = i * i;
		result += square;
	}
	return result;
}

// **************************************************************