const add = function(fNum, sNum) {
	return fNum + sNum;
};

const subtract = function(fNum, sNum) {
  return fNum - sNum;
};

const sum = function(nums) {
	let sum = 0;

  for (let num of nums) {
    sum += num;
  }  

  return sum;
};

const multiply = function(nums) {
  let sum = 1;

  for (let num of nums) {
    sum *= num;
  }  

  return sum;
};

const power = function(num, expo) {
	return Math.pow(num, expo);
};

const factorial = function(num) {
	let total = 1;

  if (num === 0) {
    total = 1;
  }
  else {
    for (let i = num; i > 0; i--) {
      total *= i;
    }
  }
  
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
