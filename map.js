const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const takeFirstLetter = function (str) {
  return str[0]
};

// const eqArrays = function(arrayA, arrayB) {
//   let areEquals = true;
//   if (arrayA.length !== arrayB.length) {
//     areEquals = false;
//   } else {
//     for (let i = 0; i < arrayB.length; i++) {
//       if (arrayB[i] !== arrayA[i]) {
//         areEquals = false;
//       }
//     }
//   }
//   return areEquals;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log("✅✅✅ Assertion Passed: the arrays are equal!");
//   } else {
//     console.log("❌❌❌ Assertion Failed: the arrays are not equal!");
//   }
// };


// assertArraysEqual(map(words, takeFirstLetter), ['g', 'c', 't', 'm', 't']);