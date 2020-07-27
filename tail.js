const tail = function(array) {
  let newArray = array.slice(0);
  return newArray.slice(1);
};

module.exports = tail;

console.log(tail(['a', 'b', 'c']))