# Return Negative Function

## Description

This JavaScript code defines a function called `makeNegative` that transforms a given number into its negative version.

### How It Works

- The `Math.abs()` function is used to calculate the absolute value of the input number. This function effectively removes the negative sign from a negative number or leaves a positive number unchanged.

- To obtain the negative version of the number, a minus sign (`-`) is placed in front of the absolute value, reversing its sign.

- The function returns the negative number as the result.

## Usage

To use the `makeNegative` function, simply provide a number as its parameter, and it will return the negative version of that number.

```javascript
const number = 42;
const negativeNumber = makeNegative(number);
console.log(negativeNumber); // This will log '-42' to the console.
