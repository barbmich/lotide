const assertEqual = function(actual, expected) {
  if (actual === expected) {
    if (typeof actual === 'string') {
      return console.log(`✅ Assertion Passed! "${actual}" === "${expected}"`);
    } else {
      return console.log(`✅ Assertion Passed! ${actual} === ${expected}`);
    }
  } else {
    if (typeof actual === 'string') {
      return console.log(`🛑 Assertion Failed! "${actual}" !== "${expected}"`);
    } else {
      return console.log(`🛑 Assertion Failed! ${actual} !== ${expected}`);
    }
  }
};

module.exports = assertEqual;