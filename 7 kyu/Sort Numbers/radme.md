# Sort Numbers

## Description

This JavaScript code defines a function named 'solution' that sorts an array of numbers. If the input array is empty or a null/nil value, it returns an empty array.

### How It Works

- The 'solution' function takes a single parameter, 'nums,' which is an array of numbers to be sorted.

- It uses a logical OR operator (`||`) to handle cases where 'nums' is either null/nil or an empty array. In such cases, it returns an empty array.

- For non-empty and non-null arrays, it uses the 'sort' method to sort the numbers in ascending order.

- The sorting is performed by subtracting 'a' from 'b' in the sorting function. This ensures ascending order.

### Usage

To sort an array of numbers, call the 'solution' function with the input array as the parameter. It will return a sorted array of numbers or an empty array for empty/null input.

```javascript
const inputArray = [1, 2, 10, 50, 5];
const sortedArray = solution(inputArray);
console.log(sortedArray); // This will log '[1, 2, 5, 10, 50]' to the console.

const emptyArray = null;
const result = solution(emptyArray);
console.log(result); // This will log '[]' to the console.
