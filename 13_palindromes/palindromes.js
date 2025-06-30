const palindromes = function (sentence) {
    let words = sentence.toLowerCase().replace(/[^a-z0-9]/gi, "");

    let splitWords = words.split("");
    let reverseWords = splitWords.reverse();
    let joinWords = reverseWords.join("");

    return joinWords === words;
};

// Do not edit below this line
module.exports = palindromes;
