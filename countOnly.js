const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      let counter = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === key) {
          counter += 1;
        }
      }
      if (counter > 0) {
        results[key] = counter;
      }
      
    }
  }
  return results;
};


module.exports = countOnly;
