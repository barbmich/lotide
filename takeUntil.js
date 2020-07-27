const takeUntil = (array, callback) => {
  let output = [];
  for (const element of array) {
    if (callback(element)) {
      return output;
    } else {
      output.push(element);
    }
  }
};

module.exports = takeUntil;