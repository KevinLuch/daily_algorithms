// Create a function which calculates the amount of fuel
// than the distance it travels. However, it must always carry
// a minimum of 100 fuel before setting off

// Create a function which calculates the amount of fuel it needs,
// given distance.

// **************************************************************

function calculateFuel(n) {
    let fuel = n * 10
    if (fuel < 100) {
        return fuel = 100
    } else {
        return fuel
    }
}
// **************************************************************