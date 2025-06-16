const removeFromArray = function(arr, ...remove) {
    let finalArr = [];

    arr.forEach((item) => {
        const index = remove.indexOf(item);
        if (index === -1) {
            finalArr.push(item);
        }
    });

    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
