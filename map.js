
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

module.exports = map;