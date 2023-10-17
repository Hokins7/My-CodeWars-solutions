# Calculate Average

## Description

This JavaScript code defines a function called 'find_average' that calculates the average of the numbers in a given list. It returns 0 for an empty array.

### How It Works

- The 'find_average' function takes one parameter, 'array,' which is an array of numbers.

- It checks if the array is not empty (i.e., it has elements).

- If the array is not empty, it calculates the average by summing all the elements in the array using the 'reduce' method and then dividing by the length of the array.

- If the array is empty, it returns 0.

- The function returns the calculated average or 0 for an empty array.

### Usage

To calculate the average of numbers in an array, call the 'find_average' function with the 'array' parameter. It will return the average.

```javascript
const numbers = [1, 2, 3, 4, 5];
const average = find_average(numbers);
console.log(average);
// This will log the average, which is 3, to the console.
