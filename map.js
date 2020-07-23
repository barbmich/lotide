const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed! The two arrays are the same.`);
  } else {
    return console.log(`🛑 Assertion Failed! The two arrays are different.`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);

// const numbers = [1, 2, 3, 4, 5, 6]
// const results2 = map(numbers, number => number[0])

// assertArraysEqual(results1, ["ground", "control", "to", "major", "tom"])
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"])
// assertArraysEqual(results2, [1, 2, 3, 4, 5, 6]) // false! numbers are not strings, running number[0] returns undefined.