const letterPositions = function(sentence) {
  const results = {};
  for (let char in sentence) {
    let index = Number(char);
    if (results[sentence[index]]) {
      results[sentence[index]].push(index);
    } else {
      results[sentence[index]] = [index];
    }
  }
  delete results[" "];
  return results;
};

const lowerCase = string => {
  let output = string.toLowerCase();
  return output;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed! The two arrays are the same.`);
  } else {
    return console.log(`🛑 Assertion Failed! The two arrays are different.`);
  }
};

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