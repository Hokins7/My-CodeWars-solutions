# Find Multiples of a Number

This JavaScript code defines a function 'findMultiples' that returns a list of multiples of an integer up to a specified limit.

## Function 'findMultiples'

The 'findMultiples' function takes two parameters:

1. `integer` (number): The base integer for which multiples need to be found.
2. `limit` (number): The maximum value to which multiples should be found.

### Returns

- `number[]`: An array of multiples of 'integer' up to 'limit'.

### Usage

To find multiples of an integer up to a specified limit, call the 'findMultiples' function with the 'integer' and 'limit' parameters.

```javascript
const base = 3;
const maxLimit = 15;
const result = findMultiples(base, maxLimit);
console.log(result);
// This will log [3, 6, 9, 12, 15] to the console.
