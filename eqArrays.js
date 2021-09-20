const assertEqual = require('./assertEqual');

const eqArrays = function(arrayA, arrayB) {
  let areEquals = true;
  if (arrayA.length !== arrayB.length) {
    areEquals = false;
  } else {
    for (let i = 0; i < arrayB.length; i++) {
      if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
        if (eqArrays(arrayB[i], arrayA[i]) === false) {
          return areEquals = false
          }
      } 
      else if (!Array.isArray(arrayA[i]) && !Array.isArray(arrayB[i])) {
        if (arrayB[i] !== arrayA[i]) {
          return areEquals = false;
        }
      }
      else {
        return areEquals = false;
      }
    }
  }
  return areEquals;
};


module.exports = eqArrays;