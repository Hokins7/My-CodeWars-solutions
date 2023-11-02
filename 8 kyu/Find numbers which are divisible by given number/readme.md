# Find numbers which are divisible by given number

This JavaScript code defines a function 'divisibleBy' that filters numbers in an array that are divisible by a given divisor.

## Function 'divisibleBy'

The 'divisibleBy' function takes two parameters:

1. `numbers` (number[]): An array of numbers.
2. `divisor` (number): The divisor to check for divisibility.

### Returns

- `number[]`: An array of numbers that are divisible by the given divisor.

### Usage

To find numbers in an array that are divisible by a specific divisor, call the 'divisibleBy' function with the 'numbers' and 'divisor' parameters.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const divisor = 2;
const divisibleNumbers = divisibleBy(numbers, divisor);
console.log(divisibleNumbers);
// This will log an array of numbers that are divisible by 2.
