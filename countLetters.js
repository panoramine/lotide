const countLetters = function(sentence) {
  let result = {};
  let str = sentence.split(' ').join('');
  for (let letter of str) {
    result[letter] = 0;
  }
  for (let letters of str) {
    result[letters] += 1;
  }
  return result;
};

module.exports = countLetters;

