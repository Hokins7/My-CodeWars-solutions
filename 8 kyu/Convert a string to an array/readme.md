# Convert a String to an Array

## Description

This JavaScript code defines a function called 'stringToArray' that splits a string into an array of words. It uses space (' ') as the delimiter to separate the words in the input string.

### How It Works

- The 'stringToArray' function takes one parameter, 'string,' which is the input string to be split into words.

- It splits the input string into an array of words using the 'split' method with a space (' ') as the delimiter.

- The function returns an array containing the words extracted from the input string.

### Usage

To split a string into an array of words, call the 'stringToArray' function with the 'string' parameter. It will return an array of words.

```javascript
const inputString = "Robin Singh";
const wordsArray = stringToArray(inputString);
console.log(wordsArray);
// This will log ["Robin", "Singh"] to the console.
