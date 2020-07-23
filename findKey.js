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

// const starSystems = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 },
// }

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// const result = findKey(starSystems, x => x.stars === 99) // => "noma"

// const findKeyByValue = (object, value) => {
//   for (key in object) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
// }

// TEST CODE
// assertEqual("Light", "Light");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);