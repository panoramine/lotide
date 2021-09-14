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
