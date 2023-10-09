# Two Oldest Ages

## Description

This JavaScript code defines a function named 'twoOldestAges' that extracts the two oldest ages from an array of numbers. The function returns these ages in ascending order as an array.

### How It Works

- The 'twoOldestAges' function takes a single parameter, 'ages,' which is an array of numbers representing ages.

- It uses the 'sort' method with a custom comparison function to sort the ages in ascending order.

- The 'slice' method is then used with the '-2' argument to extract the last two elements from the sorted array. These are the two oldest ages.

- The function returns an array containing the two oldest ages, in ascending order.

### Usage

To find the two oldest ages in an array, call the 'twoOldestAges' function with the input array of ages as the parameter. It will return an array with the two oldest ages in ascending order.

```javascript
const agesArray = [1, 5, 87, 45, 8, 8];
const oldestAges = twoOldestAges(agesArray);
console.log(oldestAges); // This will log '[45, 87]' to the console.
