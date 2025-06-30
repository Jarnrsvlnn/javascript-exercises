const fibonacci = function(num) {
    const fibLen = Number(num);

    let fib = [0, 1];

    for (let i = 2; i <= fibLen; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return (num < 0) ? "OOPS" : (fibLen === 0) ? 0 : fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
