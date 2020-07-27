const tail = function(array) {
  let newArray = array.slice(0);
  return newArray.slice(1);
};

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // TEST CODE
// assertEqual("Light", "Light");