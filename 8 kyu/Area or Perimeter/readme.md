# Area or Perimeter

## Description

This JavaScript code defines a function named 'areaOrPerimeter' that calculates either the area of a square or the perimeter of a rectangle based on its dimensions. If the length and width are equal, it's considered a square; otherwise, it's a rectangle.

### How It Works

- The 'areaOrPerimeter' function takes two parameters, 'x' and 'y,' representing the length and width of the 4-sided polygon, respectively.

- It checks if 'x' is equal to 'y' using the '==' operator to determine whether it's a square or a rectangle.

- If 'x' is equal to 'y,' it calculates the area by multiplying 'x' and 'y' together.

- If 'x' is not equal to 'y,' it calculates the perimeter by adding 'x' and 'y' and then doubling the result (2 * (x + y)).

- The function returns the area if it's a square or the perimeter if it's a rectangle.

### Usage

To calculate the area of a square or the perimeter of a rectangle, call the 'areaOrPerimeter' function with the input dimensions 'x' and 'y' as parameters. It will return the corresponding result.

```javascript
const length1 = 6;
const width1 = 10;
const result1 = areaOrPerimeter(length1, width1);
console.log(result1); // This will log '32' to the console.

const length2 = 3;
const width2 = 3;
const result2 = areaOrPerimeter(length2, width2);
console.log(result2); // This will log '9' to the console.
