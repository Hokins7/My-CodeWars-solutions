# Count of Positives / Sum of Negatives Function

## Description

This JavaScript code defines a function called `countPositivesSumNegatives` that takes an array of integers and calculates the count of positive numbers and the sum of negative numbers. The results are returned as an array.

### How It Works

- The function takes a single parameter, `input`, which is an array of integers.

- It initializes two variables, `positiveNums` and `negativeNums`, to keep track of the count of positive numbers and the sum of negative numbers.

- If the input array is either `null` or has a length of 0, the function returns an empty array since there are no numbers to analyze.

- If the input array is not empty, the function iterates through each element and checks if it's positive or negative, updating the counts and sums accordingly.

- The function returns an array containing the count of positive numbers and the sum of negative numbers.

## Usage

To use the `countPositivesSumNegatives` function, provide an array of integers as its parameter, and it will return an array containing the count of positive numbers and the sum of negative numbers.

```javascript
const numberList = [1, 2, 3, -4, -5];
const result = countPositivesSumNegatives(numberList);
console.log(result); // This will return [3, -9] as output.
