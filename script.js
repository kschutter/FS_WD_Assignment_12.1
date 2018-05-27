// Function that increases or decreases a value depending on the actionType
function counterReducer(actionType, counter) {
    if (actionType == "INC") return ++counter;
    if (actionType == "DEC") return --counter;
    throw "Incorrect action type";
}

// Test cases
var bigger = 0;
console.log(counterReducer("INC",bigger));

var lesser = 0;
console.log(counterReducer("DEC",lesser));

var err = 0;
console.log(counterReducer("ERROR",err));