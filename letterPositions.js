const letterPositions = function(sentence) {
  const results = {};
  let str = sentence.split(' ').join('');
  for (let letter of str) {
    results[letter] = [];
  }
  for (let i = 0; i < str.length; i++) {
    results[str[i]].push(i);
  }
  return results;
};

