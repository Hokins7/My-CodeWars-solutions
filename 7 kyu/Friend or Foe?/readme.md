# Friend or Foe? Function

## Description

This JavaScript code defines a function called `friend` that filters a list of names to find only friends with exactly 4 letters in their names.

### How It Works

- The function takes an array of names, `friends`, as its parameter.

- It uses the `filter()` method to create a new array that contains only elements (names) that meet a certain condition.

- The condition is checked by a callback function within the `filter()` method, which verifies if the length of each name in the array is equal to 4.

- The function returns a new array containing the names of friends with exactly 4 letters in their names, maintaining the original order.

## Usage

To use the `friend` function, provide an array of names as its parameter, and it will return a new array containing the names of friends with exactly 4 letters in their names.

```javascript
const names = ["Ryan", "Kieran", "Mark"];
const friendNames = friend(names);
console.log(friendNames); // This will return ["Ryan", "Mark"] as output.
