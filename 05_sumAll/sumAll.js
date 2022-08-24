const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    if(checkInputs(firstNum, lastNum)){
        let arr = new Array (firstNum, lastNum);
        if(firstNum < lastNum){
            for (let i=firstNum; i<=lastNum; i++){
                if (arr.indexOf(i) == -1){
                    arr.push(i);
                }
            }
        } else {
            for (let i=lastNum; i<=firstNum; i++){
                if (arr.indexOf(i) == -1){
                    arr.push(i);
                }
            }
        }

        for (i=0; i<arr.length; i++){
            sum += arr[i];
        }

        return sum;

    } else {
        return "ERROR";
    }
}

function checkInputs(first, second){
    if (first < 0 || second < 0){
        return false;
    } else if (typeof first == "string" || typeof second == "string" || typeof first == "object" || typeof second == "object"){
        return false;
    } else {
        return true;
    }
}

// Do not edit below this line
module.exports = sumAll;
