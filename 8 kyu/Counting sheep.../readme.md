# Counting Sheep Function

## Description

This JavaScript code defines a function called `countSheeps` that counts the number of sheep present in an array of boolean values, where `true` represents the presence of a sheep.

### How It Works

- The function takes a single parameter, `arrayOfSheep`, which is an array of boolean values.

- It initializes a variable, `sum`, to keep track of the count of sheep.

- The function iterates through each element in the input array using a `for` loop, checking if each element is equal to `true`.

- If an element is `true`, it increments the `sum` variable.

- After iterating through all elements, the function returns the count of sheep present as a number.

## Usage

To use the `countSheeps` function, provide an array of boolean values as its parameter, where `true` represents the presence of a sheep. It will return the count of sheep present in the array.

```javascript
const sheepArray = [true, true, false, true, false, true, true];
const sheepCount = countSheeps(sheepArray);
console.log(sheepCount); // This will return 5 as output.
