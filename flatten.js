const eqArrays = function(arrayA, arrayB) {
  let areEquals = true;
  if (arrayA.length !== arrayB.length) {
    areEquals = false;
  } else {
    for (let i = 0; i < arrayB.length; i++) {
      if (arrayB[i] !== arrayA[i]) {
        areEquals = false;
      }
    }
  }
  return areEquals;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: the arrays are equal!");
  } else {
    console.log("❌❌❌ Assertion Failed: the arrays are not equal!");
  }
};

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

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 3, 4, 5, 6]));