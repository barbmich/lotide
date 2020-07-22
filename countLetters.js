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

const noSpaces = string => {
  let output = string.split(' ').join('');
  return output;
};

const lowerCase = string => {
  let output = string.toLowerCase();
  return output;
};

const countLetters = string => {
  let output = {};
  for (let char of string) {
    if (output[char]) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
  return output;
};