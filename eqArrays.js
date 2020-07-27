const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     if (typeof actual === 'string') {
//       return console.log(`✅ Assertion Passed! "${actual}" === "${expected}"`);
//     } else {
//       return console.log(`✅ Assertion Passed! ${actual} === ${expected}`);
//     }
//   } else {
//     if (typeof actual === 'string') {
//       return console.log(`🛑 Assertion Failed! "${actual}" !== "${expected}"`);
//     } else {
//       return console.log(`🛑 Assertion Failed! ${actual} !== ${expected}`);
//     }
//   }
// };

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const index in array1) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays;