const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: the arrays are equal!");
  } else {
    console.log("❌❌❌ Assertion Failed: the arrays are not equal!");
  }
};


module.exports = assertArraysEqual;