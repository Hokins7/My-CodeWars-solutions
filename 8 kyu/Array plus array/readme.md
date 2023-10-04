# Array plus Array Function

## Description

This JavaScript code defines a function called `arrayPlusArray` that calculates the sum of all elements in two arrays of integers.

### How It Works

- The function takes two parameters: `arr1` (the first array of integers) and `arr2` (the second array of integers).

- It uses the `reduce()` method on both arrays to calculate the sum of elements in each array.

- The results of the `reduce()` operations on both arrays are added together to obtain the final sum of all elements in both arrays.

- The function returns this sum as a number.

## Usage

To use the `arrayPlusArray` function, provide two arrays of integers as its parameters, and it will return the sum of all elements in both arrays.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = arrayPlusArray(array1, array2);
console.log(result); // This will return 21 as output (1 + 2 + 3 + 4 + 5 + 6).
