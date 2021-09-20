const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: the objects are equal! ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: the objects are not equal! ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
 
module.exports = assertObjectsEqual;