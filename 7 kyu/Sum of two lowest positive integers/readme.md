# Sum of Two Lowest Positive Integers

## Description

This JavaScript code defines a function called 'sumTwoSmallestNumbers' that calculates the sum of the two lowest positive numbers from an array. The input array should contain a minimum of 4 positive integers. No floats or non-positive integers are allowed.

### How It Works

- The 'sumTwoSmallestNumbers' function takes one parameter, 'numbers,' which is an array of positive integers.

- It first filters out all positive integers from the array using the 'filter' method.

- Then, it sorts the filtered positive integers in ascending order using the 'sort' method.

- Next, it slices the first two elements of the sorted array, which represent the two lowest positive numbers.

- Finally, it returns the sum of these two lowest positive numbers.

### Usage

To find the sum of the two lowest positive numbers in an array, call the 'sumTwoLowestNumbers' function with the 'numbers' parameter. It will return the sum.

```javascript
const numbers = [19, 5, 42, 2, 77];
const sum = sumTwoLowestNumbers(numbers);
console.log(sum);
// This will log 7 to the console.
