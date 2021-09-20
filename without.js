const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let stay = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        stay = false;
      }
    }
    if (stay) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;