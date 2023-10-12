# Beginner - Lost Without a Map

## Description

This JavaScript code defines a function named 'maps' that takes an array of integers and returns a new array where each value is doubled.

### How It Works

- The 'maps' function takes a single parameter, 'x,' which is an array of integers.

- It uses the 'map' method to iterate through the array and apply a doubling operation to each element.

- In the provided function within 'map', it doubles each value 'v' by multiplying it by 2.

- The 'map' method returns a new array containing the doubled values.

### Usage

To create a new array with each value doubled, call the 'maps' function with the input array 'x' as the parameter. It will return a new array where all values are twice their original values.

```javascript
const originalArray = [1, 2, 3];
const doubledArray = maps(originalArray);
console.log(doubledArray); // This will log '[2, 4, 6]' to the console.
