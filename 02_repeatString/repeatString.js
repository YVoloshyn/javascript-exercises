const repeatString = function(string, number) {
    let finalString = "";
    if (number >= 0){
        for ( let i=0; i < number; i++ ){
            finalString += string;
        }
    } else {
        finalString = "ERROR";
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
