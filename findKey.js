const findKeyByValue = require("./findKeyByValue");

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

console.log(findKey({'a': 1, 'b': 2}, x => x == 'a'))