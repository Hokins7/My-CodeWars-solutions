# Be Concise III - Sum Squares

## Description

This JavaScript code defines a function named 'sumSquares' that calculates the sum of the squares of each item in an array. It achieves this using the 'reduce' method to simplify the code.

### How It Works

- The 'sumSquares' function takes a single parameter, 'array,' which is an array of numbers.

- It uses the 'reduce' method to iterate through the array and accumulate the sum of the squares of the array elements.

- The 'reduce' method takes a function that calculates the sum and an initial value of 0.

- In the provided function, it accumulates the sum 'a' by adding the square of the current element 'b' to it.

- The final result is the sum of the squares of all elements in the array.

### Usage

To calculate the sum of the squares of numbers in an array, call the 'sumSquares' function with the input array as the parameter. It will return the sum as a number.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum1 = sumSquares(numbers);
console.log(sum1); // This will log '55' to the console.

const numbers2 = [7, 3, 9, 6, 5];
const sum2 = sumSquares(numbers2);
console.log(sum2); // This will log '200' to the console.
s