# Fizz Buzz

## Description

This JavaScript code defines a function named 'fizzbuzz' that generates an array containing numbers from 1 to 'n'. Certain values are replaced based on specific conditions:

- If a number is a multiple of 3, it's replaced with 'Fizz'.
- If a number is a multiple of 5, it's replaced with 'Buzz'.
- If a number is a multiple of both 3 and 5, it's replaced with 'FizzBuzz'.

### How It Works

- The 'fizzbuzz' function takes one parameter, 'n,' which represents the upper limit of the number range (inclusive).

- It initializes an empty array 'tempArr' to store the results.

- The function then iterates through numbers from 1 to 'n' using a for loop.

- For each number 'i' in the range:
  - If 'i' is a multiple of both 3 and 5, 'FizzBuzz' is pushed to 'tempArr.'
  - If 'i' is only a multiple of 3, 'Fizz' is pushed.
  - If 'i' is only a multiple of 5, 'Buzz' is pushed.
  - If 'i' doesn't meet any of these conditions, 'i' is pushed as it is.

- Finally, the function returns the 'tempArr' array containing the numbers and their replacements.

### Usage

To generate an array with numbers and their replacements following the Fizz Buzz rules, call the 'fizzbuzz' function with 'n' as the upper limit. It will return an array containing the numbers and their respective replacements.

```javascript
const upperLimit = 15;
const fizzBuzzArray = fizzbuzz(upperLimit);
console.log(fizzBuzzArray);
// This will log [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] to the console.
