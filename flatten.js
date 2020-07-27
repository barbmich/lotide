const flatten = array => {
  let output = [];
  for (let index of array) {
    if (Array.isArray(index)) {
      for (let value of index) {
        output.push(value);
      }
    } else {
      output.push(index);
    }
  }
  return output;
};

module.exports = flatten;