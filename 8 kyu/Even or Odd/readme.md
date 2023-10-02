# Even or Odd Function

## Description

This JavaScript code defines a function called `even_or_odd` that determines if a given number is even or odd.

### How It Works

- The function takes a single parameter, `number`, which is the number to be checked.

- It checks if the number is even using the modulo operator `%`. If `number % 2` equals 0, it means the number is even.

- The function returns 'Even' if the number is even, and 'Odd' if it's odd.

## Usage

To use the `even_or_odd` function, provide a number as its parameter, and it will return 'Even' if the number is even, or 'Odd' if it's odd.

```javascript
const testNumber = 7;
const result = even_or_odd(testNumber);
console.log(result); // This will log 'Odd' to the console because 7 is an odd number.
