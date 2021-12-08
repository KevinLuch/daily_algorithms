// Create a function that accepts a Date object and return true
// if it's Christmas Eve (December 24th) and false otherwise.

// **************************************************************

function timeForMilkAndCookies(date) {
    var day = date.getDate();
    var month = date.getMonth();
    
    if(day == 24 && month == 11) {
        return true
    } else {
        return false
    }
}

// **************************************************************