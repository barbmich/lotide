const without = function(source, itemsToRemove) {
  let output = source.slice(0);
  for (const value of itemsToRemove) {
    for (let i = 0; i < output.length; i++) {
      if (value === output[i]) {
        output.splice(i,1);
      }
    }
  }
  return output;
};

module.exports = without;