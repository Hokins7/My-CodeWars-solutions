# Basic Mathematical Operations

## Description

This JavaScript code defines a function named 'basicOp' that performs four basic mathematical operations (addition, subtraction, multiplication, division) based on the given operation and two numeric values.

### How It Works

- The 'basicOp' function takes three parameters: 'operation,' which represents the mathematical operation (+, -, *, /), and 'value1' and 'value2,' which are the numeric values on which the operation is applied.

- The function uses a 'switch' statement to check the 'operation' and perform the corresponding mathematical operation.

- If the operation is addition ('+'), it returns the result of adding 'value1' and 'value2'.

- If the operation is subtraction ('-'), it returns the result of subtracting 'value2' from 'value1'.

- If the operation is multiplication ('*'), it returns the result of multiplying 'value1' and 'value2'.

- If the operation is division ('/'), it returns the result of dividing 'value1' by 'value2'.

- If the 'operation' is not one of the valid options, it returns 0 as the default result.

### Usage

To perform a basic mathematical operation, call the 'basicOp' function with the operation symbol ('+', '-', '*', or '/') and the two numeric values 'value1' and 'value2' as parameters. It will return the result of the operation.

```javascript
const additionResult = basicOp('+', 4, 7);
console.log(additionResult); // This will log '11' to the console.

const subtractionResult = basicOp('-', 15, 18);
console.log(subtractionResult); // This will log '-3' to the console.
