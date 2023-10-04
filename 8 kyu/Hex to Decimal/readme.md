# Hex to Decimal Conversion Function

## Description

This JavaScript code defines a function called `hexToDec` that converts a hexadecimal number (given as a string) to its decimal equivalent.

### How It Works

- The function takes a single parameter, `hexString`, which is the hexadecimal number represented as a string.

- It uses the `parseInt()` function with `base 16` as the second argument. This base is specific for hexadecimal conversion and tells JavaScript to interpret the input as a hexadecimal number.

- The function returns the decimal equivalent of the hexadecimal number as a number.

## Usage

To use the `hexToDec` function, provide a hexadecimal number represented as a string as its parameter, and it will return the decimal equivalent.

```javascript
const hexNumber = "1A"; // Hexadecimal representation of 26 in decimal.
const decimalNumber = hexToDec(hexNumber);
console.log(decimalNumber); // This will return 26 as output.
