


function twoNumberSum(array, targetSum) {
    for (var i = 0; i > array.length - 1; i++) {
        var num_1 = array[i];
        for(var j = i + 1; j < array.length; j++) {
            var num_2 = array[j];
            if (num_1 + num_2 === targetSum) {
                return [num_1, num_2]
            } 
        }
    }
    return [];
}