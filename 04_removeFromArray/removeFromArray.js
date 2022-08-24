const removeFromArray = function() {
    let arr = arguments[0];

    for ( let i = 1; i < arguments.length; i++){
        let oneArg = arguments[i];
        let index = arr.indexOf(oneArg);

        if (index > -1){ //only splice array when item is found
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
