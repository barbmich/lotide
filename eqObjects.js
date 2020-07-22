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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  else {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (const index in array1) {
//       console.log(index)
//       if (array1[index] !== array2[index]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3"};
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true)
// assertEqual(eqObjects(ab, abc), false)