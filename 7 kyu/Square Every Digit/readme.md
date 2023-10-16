# Square Every Digit

## Description

This JavaScript code defines a function named 'squareDigits' that takes an integer, squares every digit of the number, and concatenates them to form a new integer.

### How It Works

- The 'squareDigits' function takes one parameter, 'num,' which is the integer to process.

- It converts the integer to a string to make it easier to manipulate its individual digits.

- It iterates through the digits in the string representation of the number and squares each digit. The squared digit is then concatenated to the result string.

- After processing all the digits, the concatenated string is converted back to an integer using the 'Number' function.

- The function returns the new integer with squared digits concatenated.

### Usage

To square every digit of an integer and concatenate the squared digits, call the 'squareDigits' function with the 'num' as the parameter. It will return a new integer.

```javascript
const number = 9119;
const squaredNumber = squareDigits(number);
console.log(squaredNumber);
// This will log 811181 to the console.
