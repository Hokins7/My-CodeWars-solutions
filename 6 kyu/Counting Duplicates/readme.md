# Counting Duplicates

This JavaScript code defines a function 'duplicateCount' that counts the number of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

## Function 'duplicateCount'

The 'duplicateCount' function takes one parameter:

1. `text` (string): The input string to count duplicates from.

### Returns

- `number`: The count of distinct case-insensitive characters that occur more than once.

### Usage

To count duplicates in a string, call the 'duplicateCount' function with the 'text' parameter.

```javascript
const inputString = "aabBcde";
const count = duplicateCount(inputString);
console.log(count);
// This will log 2 to the console.
