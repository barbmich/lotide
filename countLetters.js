const noSpaces = string => {
  let output = string.split(' ').join('');
  return output;
};

const lowerCase = string => {
  let output = string.toLowerCase();
  return output;
};

const countLetters = string => {
  string = noSpaces(string);
  string = lowerCase(string);
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

module.exports = countLetters;