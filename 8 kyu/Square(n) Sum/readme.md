# Square(n) Sum Function

## Description

This JavaScript code defines a function called `squareSum` that calculates the sum of squares of numbers in an array.

### How It Works

- The function initializes a variable `res` to 0. This variable is used to accumulate the sum of the squares of the numbers.

- A `for` loop is used to iterate through each element of the array. The loop processes all elements, squaring each one and adding it to the `res` variable.

- To square an element, `Math.pow(numbers[i], 2)` is used, where `numbers[i]` represents the current element.

- The function returns the final value of `res`, which is the sum of squares of the numbers in the array.

## Usage

To use the `squareSum` function, provide an array of numbers as its parameter, and it will return the sum of squares of those numbers.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sumOfSquares = squareSum(numbers);
console.log(sumOfSquares); // This will log '55' to the console.
