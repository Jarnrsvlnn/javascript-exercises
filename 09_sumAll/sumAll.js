const sumAll = function(startNum, endNum) {

    if (startNum > endNum) {
        [startNum, endNum] = [endNum, startNum];
    }

    let sum = 0;
    if (startNum >= 0 && endNum >= 0 && typeof startNum === "number" && typeof endNum === "number" && Number.isInteger(startNum) && Number.isInteger(endNum)) {
        for (let i = startNum; i <= endNum; i++)
        {
            sum += i;
        }
            
        return sum;
    }
    else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
