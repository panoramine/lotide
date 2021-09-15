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


const middle = function(array) {
  let middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArray.push(array[(array.length / 2) - 1]);
      middleArray.push(array[array.length / 2]);
    } else {
      middleArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleArray;
};
