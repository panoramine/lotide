const eqArrays = require('./eqArrays');


const flatten = function(mainArray) {
  let answer = [];
  for (let i = 0; i < mainArray.length; i++) {
    if (!Array.isArray(mainArray[i])) {
      answer.push(mainArray[i]);
    } else {
      for (let j = 0; j < mainArray[i].length; j++) {
        answer.push(mainArray[i][j]);
      }
    }
  }
  return answer;
};

module.exports = flatten;