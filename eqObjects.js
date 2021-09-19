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


const eqObjects = function(obj1, obj2) {
  let areEqual;
  for (let key1 in obj1) {
    if (typeof obj1[key1] === 'object') {
      if (typeof obj2[key1] === 'object') {
        if (Array.isArray(obj1[key1] && Array.isArray(obj2[key1]))) {
          areEqual = eqArrays(obj1[key1], obj2[key1]);
        } else {
          return eqObjects(obj1[key1], obj2[key1]);
        }
      } else {
        areEqual = false;
      }
    } else {
      if (obj2[key1] !== obj1[key1]) {
        areEqual = false;
      }
    }
  }
  if (areEqual === false) {
    return false;
  } else {
    return true;
  }
};
