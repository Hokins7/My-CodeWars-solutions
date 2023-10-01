# Is n Divisible by x and y? Function

## Description

This JavaScript code defines a function called `isDivisible` that checks if a given number is divisible by both `x` and `y`.

### How It Works

- The function takes three parameters: `n` (the number to check for divisibility), `x` (the first divisor), and `y` (the second divisor).

- It uses the modulo operator `%` to check divisibility. If `n % x` equals 0 and `n % y` equals 0, it means `n` is divisible by both `x` and `y`.

- The function returns `true` if `n` is divisible by both `x` and `y`, and `false` otherwise.

## Usage

To use the `isDivisible` function, provide three parameters: the number to check for divisibility (`n`), the first divisor (`x`), and the second divisor (`y`). The function will return `true` if `n` is divisible by both `x` and `y`, and `false` otherwise.

```javascript
const number = 12;
const divisor1 = 3;
const divisor2 = 4;
const result = isDivisible(number, divisor1, divisor2);
console.log(result); // This will log 'true' to the console because 12 is divisible by both 3 and 4.
