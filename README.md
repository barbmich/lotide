# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @barbmich/lotide`

**Require it:**

`const _ = require('@barbmich/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are equal by comparing the element in each same index.
* `assertEqual`: asserts if two values are strictly equal.
* `assertObjectsEqual`: asserts if two objects are equals by comparing each key-value pair.
* `countLetters`: takes a string, outputs an object with the string characters as keys, and their occurrence as value.
* `eqArrays`: compares two arrays. returns true if they are equal, false otherwise.
* `countOnly`: takes an array and an object, returns an object that counts how many times an item is found in the array (if 0, it won't be counted).
* `eqObjects`: compares two objects. returns true if they are equal, false otherwise.
* `findKey`: takes an object and a callback function. the function scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: takes an object and a value. the function scans the object and returns the first key which contains the given value.
* `flatten`: takes an array, returns a 'flattened' version of these arrays, on a single dimension.
* `head`: takes an array, returns the element in the first index.
* `letterPositions`: takes a string, returns an object containing all the string characters as keys, and their position as value - spaces are considered but not listed in the keys.
* `map`: behaves as the map method: takes an array and a callback function, applies callback to each element of the array.
* `middle`: given an array, returns what's in the middle: 1 element if the array is odd, 2 elements if it is even.
* `tail`: given an array, returns a new array without its first index.
* `takeUntil`: takes an array and a value, returns an array made by all elements until such value is encountered (value excluded).
* `without`: takes two arrays, returns the initial array with elements from the second removed. 