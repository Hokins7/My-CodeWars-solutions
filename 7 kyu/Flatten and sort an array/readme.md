# Flatten and Sort an Array

## Description

This JavaScript code defines a function named 'flattenAndSort' that takes a two-dimensional array of integers. It flattens the array into a single array and sorts the integers in ascending order.

### How It Works

- The 'flattenAndSort' function takes one parameter, 'array,' which is a two-dimensional array of integers.

- It uses the 'reduce' method to flatten the two-dimensional array. The 'reduce' method iterates through each subarray ('cur') and concatenates it with the previous array ('prev') to form a single array.

- After flattening the array, the 'sort' method is applied to sort the integers in ascending order. The comparison function '(a, b) => a - b' is used to ensure numeric sorting.

- The sorted array is returned as the result.

### Usage

To flatten and sort a two-dimensional array of integers, call the 'flattenAndSort' function with the 'array' as the parameter. It will return a flattened and sorted array of integers.

```javascript
const twoDimArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
const flattenedAndSortedArray = flattenAndSort(twoDimArray);
console.log(flattenedAndSortedArray);
// This will log [1, 2, 3, 4, 5, 6, 7, 8, 9] to the console.
