# Grasshopper - Array Mean

## Description

The JavaScript function `findAverage` calculates the mean (average) of an array of numbers. The mean is the sum of all numbers in the array divided by the total number of values.

### How It Works

- The `findAverage` function takes one parameter, `nums`, which is an array of numbers.

- It calculates the mean by using the `reduce` method to sum all the numbers in the array and then divides this sum by the total number of values (the length of the array).

- The function returns the calculated mean as a result.

### Usage

To find the mean of an array of numbers, call the `findAverage` function and provide the array as a parameter.

```javascript
const numbers = [1, 3, 5, 7];
const average = findAverage(numbers);
console.log(average);
// This will log 4 to the console, which is the mean of the array [1, 3, 5, 7].
