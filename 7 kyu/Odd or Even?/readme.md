# Odd or Even? Function

## Description

This JavaScript code defines a function called `oddOrEven` that determines whether the sum of a list of integers is even or odd.

### How It Works

- The function takes an array of integers as its parameter.

- It uses the `reduce()` method to calculate the sum of the integers in the array. The initial sum is set to 0.

- It checks if the sum is even using the modulo operator `%`. If `sum % 2` equals 0, it means the sum is even. Otherwise, it's considered odd.

- The function returns 'even' if the sum is even and 'odd' if it's odd.

## Usage

To use the `oddOrEven` function, provide an array of integers as its parameter, and it will return 'even' if the sum is even or 'odd' if the sum is odd.

```javascript
const numberList = [1, 2, 3, 4, 5];
const result = oddOrEven(numberList);
console.log(result); // This will log 'odd' to the console because the sum is 15, which is an odd number.
