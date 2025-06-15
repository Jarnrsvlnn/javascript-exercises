const repeatString = function(word, num) {
    let text = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            text += word;
        }
        return text;
    }
    
    else {
        return "ERROR";
    }   

};

// Do not edit below this line
module.exports = repeatString;
