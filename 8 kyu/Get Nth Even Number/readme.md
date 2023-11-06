# Get Nth Even Number

## Description

The JavaScript function `nthEven` returns the Nth even number. Even numbers are integers divisible by 2, and this function provides a straightforward way to find the Nth even number.

### How It Works

- The `nthEven` function takes one parameter, `n`, which represents the index of the even number you want to retrieve.

- It calculates the Nth even number by multiplying `n` by 2 and then subtracting 2 from the result.

- The function returns the Nth even number as a result.

### Usage

To get the Nth even number, call the `nthEven` function and provide the desired index.

```javascript
const n = 3;
const nthEvenNumber = nthEven(n);
console.log(nthEvenNumber);
// This will log 4 to the console, which is the 3rd even number.
