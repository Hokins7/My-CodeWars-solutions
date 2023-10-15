# Highest and Lowest

## Description

This JavaScript code defines a function named 'highAndLow' that takes a string of space-separated numbers, extracts the highest and lowest numbers, and returns them as a string.

### How It Works

- The 'highAndLow' function takes one parameter, 'numbers,' which is a string of space-separated numbers.

- It splits the input string into an array of numbers using the 'split' method and sorts it in ascending order using the 'sort' method. It then extracts the lowest number using 'shift'.

- It also splits the input string into an array of numbers, sorts it in descending order, and extracts the highest number using 'shift'.

- The function returns a string containing the highest and lowest numbers separated by a space.

### Usage

To find the highest and lowest numbers from a string of space-separated numbers, call the 'highAndLow' function with the 'numbers' as the parameter. It will return a string containing the highest and lowest numbers separated by a space.

```javascript
const numberString = "1 2 -3 4 5";
const result = highAndLow(numberString);
console.log(result);
// This will log "5 -3" to the console.
