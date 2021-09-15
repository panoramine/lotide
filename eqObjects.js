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
  let counter1 = 0;
  let counter2 = 0;
  for (let key1 in obj1) {
    counter1 += 1;
    areEqual = false;
    if (typeof obj1[key1] === 'object') {
      for (let key2 in obj2) {
        counter2 += 1;
        if (typeof obj2[key2] === 'object') {
          areEqual = eqArrays(obj1[key1], obj2[key2]);
        }
      }
      if (!areEqual) {
        break;
      }
    } else {
      for (let key2 in obj2) {
        counter2 += 1;
        if (obj1[key1] === obj2[key2]) {
          areEqual = true;
          
        }
      }
      if (!areEqual) {
        break;
      }
    }
  }
  if ((counter2 / counter1) !== counter1) {
    areEqual = false;
  }
  return areEqual;
};


