const assertArraysEqual = require('../assertArraysEqual');

const array1 = ['a', 'b', 'c', 'd']
const array2 = ['a', 'b', 3, 4]

assertArraysEqual(array1, ['a', 'b', 'c', 'd']); // correct output
assertArraysEqual(array2, ['a', 'b', 'c', 'd']); // correct output