// function takes an array and a callback function
const takeUntil = (array, callback) => {
  // creates and empty array to be returned at the end
  let output = [];
  // for of loop through the array
  for (const index of array) {
    // if callback function on the index parameter is true
    if (callback(index)) {
      // returns array obtained until now
      return output;
    // pushes index to the array
    } else {
      output.push(index);
    }
  }
};

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2)

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1)

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

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     return console.log(`✅ Assertion Passed! The two arrays are the same.`);
//   } else {
//     return console.log(`🛑 Assertion Failed! The two arrays are different.`);
//   }
// };

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])