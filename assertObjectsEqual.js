const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // inspect(actual)
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// assertObjectsEqual({a: 1, b: "3"}, {b: "3", a: 1})
// assertObjectsEqual({a: "1", b: "3"}, {b: "3", a: 1})