# List Filtering

## Description

This JavaScript code defines a function named 'filter_list' that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

### How It Works

- The 'filter_list' function takes one parameter, 'l,' which is an array containing non-negative integers and strings.

- It uses the 'filter' method to create a new array that contains only the non-negative integers from the input array. The 'Number.isInteger(el)' condition is used to filter out non-negative integers.

- The function returns the new array containing only non-negative integers.

### Usage

To filter and get only the non-negative integers from an array containing a mix of integers and strings, call the 'filter_list' function with the 'l' as the parameter. It will return a new array containing the non-negative integers.

```javascript
const mixedList = [1, 2, 'aasf', '1', '123', 123];
const nonNegativeIntegers = filter_list(mixedList);
console.log(nonNegativeIntegers);
// This will log [1, 2, 123] to the console.
