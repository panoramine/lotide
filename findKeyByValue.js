const findKeyByValue = function(obj, value) {
  let answer = "";
  for (let key in obj) {
    if (obj[key] === value) {
      console.log(key);
      answer += key;
    }
  }
  if (answer.length !== 0) {
    return answer;
  }
};

