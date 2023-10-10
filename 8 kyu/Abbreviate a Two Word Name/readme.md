# Abbreviate a Two Word Name

## Description

This JavaScript code defines a function named 'abbrevName' that converts a two-word name into initials. The initials are separated by a dot and presented in uppercase.

### How It Works

- The 'abbrevName' function takes a single parameter, 'name,' which is a two-word name with a space in between (e.g., "First Last").

- It uses the 'split' method to split the input name into an array of words, using the space as the delimiter.

- The function then returns the initials by taking the first letter of the first word, adding a dot, and then appending the first letter of the second word.

- To ensure the initials are in uppercase, it uses the 'toUpperCase' method.

### Usage

To convert a two-word name into initials, call the 'abbrevName' function with the input name as the parameter. It will return the initials in uppercase with a dot in between.

```javascript
const fullName1 = "Sam Harris";
const initials1 = abbrevName(fullName1);
console.log(initials1); // This will log 'S.H' to the console.

const fullName2 = "patrick feeney";
const initials2 = abbrevName(fullName2);
console.log(initials2); // This will log 'P.F' to the console.
