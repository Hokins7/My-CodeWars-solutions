# JavaScript Array Filter

## Description

This JavaScript code defines a function named 'getEvenNumbers' that takes an array of numbers and filters out the even numbers, returning a new array containing only even numbers.

### How It Works

- The 'getEvenNumbers' function takes one parameter, 'numbersArray,' which is an array of numbers.

- It uses the 'filter' method to create a new array that contains only the even numbers from the input array. The 'num % 2 == 0' condition is used to filter out even numbers.

- The function returns the new array containing only the even numbers.

### Usage

To filter and get only the even numbers from an array of numbers, call the 'getEvenNumbers' function with the 'numbersArray' as the parameter. It will return a new array containing the even numbers.

```javascript
const numberArray = [2, 4, 5, 6];
const evenNumbers = getEvenNumbers(numberArray);
console.log(evenNumbers);
// This will log [2, 4, 6] to the console.
