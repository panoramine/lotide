const findKey = function (obj, callback) {
  let answer = "";
  for (let key in obj) {
    if (callback(obj[key])) {
      answer = key;
      break;
    }
  }
  return answer;
};

