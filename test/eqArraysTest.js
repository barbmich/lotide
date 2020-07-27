const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')

const arr1 = [1, 2, 'c', true];
const arr2 = [1, 2, 'c', true];

assertEqual(eqArrays(arr1, arr2), true);

const arr3 = [1, 'b', 3, false];

assertEqual(eqArrays(arr1, arr3), false);