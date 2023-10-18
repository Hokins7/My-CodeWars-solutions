# Century From Year

## Description

This JavaScript code defines a function called 'century' that calculates the century of a given year. A century is a period of 100 years, and the function determines which century a specific year falls into.

### How It Works

- The 'century' function takes one parameter, 'year,' which is the input year for which you want to find the century.

- It calculates the century by dividing the input year by 100 and rounding up to the nearest integer using the 'Math.ceil' function. This ensures that years such as 1705 are correctly placed in the 18th century.

- The function returns the calculated century based on the input year.

### Usage

To find the century of a given year, call the 'century' function with the 'year' parameter. It will return the corresponding century.

```javascript
const year = 1705;
const century = century(year);
console.log(century);
// This will log '18' to the console, indicating that the year 1705 is in the 18th century.
