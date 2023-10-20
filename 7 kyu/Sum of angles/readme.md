# Sum of Angles

## Description

This JavaScript code defines a function called 'angle' that calculates the sum of internal angles in a simple polygon. The polygon has 'n' sides, where 'n' is greater than 2.

### How It Works

- The 'angle' function takes one parameter, 'n,' which represents the number of sides of the polygon.

- It calculates the sum of internal angles using the formula: `(n - 2) * 180`. This formula works for any simple polygon.

- The function returns the total sum of internal angles in degrees.

### Usage

To find the sum of internal angles of a polygon with 'n' sides, call the 'angle' function with the 'n' parameter. It will return the sum in degrees.

```javascript
const sides = 5;
const sumOfAngles = angle(sides);
console.log(sumOfAngles);
// This will log 540 to the console for a pentagon.
