// Create a function that takes a number as an argument
// and returns the highest digit in that number

// Examples:
// - highestDigit(379) ➞ 9
// - highestDigit(2) ➞ 2
// - highestDigit(377401) ➞ 7
// **************************************************************

const highestDigit = number => {
    let str = number.toString();
    let max = '0';
    for (var i = 0; i < str.length; i++)
        if (str[i] > max) max = str[i];
    return Number(max);
};

// **************************************************************