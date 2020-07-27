const eqArrays = require('./eqArrays');

// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed! The two arrays are the same.`);
  } else {
    return console.log(`🛑 Assertion Failed! The two arrays are different.`);
  }
};

module.exports = assertArraysEqual;