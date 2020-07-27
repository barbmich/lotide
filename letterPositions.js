const lowerCase = string => {
  string = string.toLowerCase();
  return string;
};

const letterPositions = function(string) {
  string = lowerCase(string);
  const results = {};
  for (let char in string) {
    let index = Number(char);
    if (results[string[index]]) {
      results[string[index]].push(index);
    } else {
      results[string[index]] = [index];
    }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;