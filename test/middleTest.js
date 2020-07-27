const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c'])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c'])