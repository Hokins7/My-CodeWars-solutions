# Mumbling

## Description

This JavaScript code defines a function named 'accum' that transforms a given string based on the 'mumbling' pattern. The pattern repeats each character with increasing lowercase repetitions and separates characters with hyphens.

### How It Works

- The 'accum' function takes a single parameter, 's,' which is the input string to be transformed.

- It initializes an empty array 'result' to store intermediate strings and converts the input string to lowercase with the 'toLowerCase' method.

- The code iterates through each character in the lowercase version of the input string using a 'for' loop.

- For each character, it creates a string by converting the character to uppercase and then appends the lowercase version of the character 'i' times, where 'i' is the index of the character in the string.

- The constructed string is added to the 'result' array.

- Finally, the intermediate strings in the 'result' array are joined with hyphens using the 'join' method, and the transformed string following the 'mumbling' pattern is returned.

### Usage

To transform a string according to the 'mumbling' pattern, call the 'accum' function with the input string as the parameter. It will return the transformed string.

```javascript
const inputString = "abcd";
const transformedString = accum(inputString);
console.log(transformedString); // This will log 'A-Bb-Ccc-Dddd' to the console.
