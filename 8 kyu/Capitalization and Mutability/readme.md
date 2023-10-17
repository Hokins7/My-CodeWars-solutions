# Capitalization and Mutability

## Description

This JavaScript code defines a function called 'capitalizeWord' that capitalizes the first letter of a given string (a single word).

### How It Works

- The 'capitalizeWord' function takes one parameter, 'word,' which is the input string to be capitalized.

- It capitalizes the first letter of the input string using the 'toUpperCase' method on the first character.

- It then concatenates the capitalized first letter with the rest of the string, which is obtained by slicing the string from the second character (index 1) to the end.

- The function returns the input string with the first letter capitalized.

### Usage

To capitalize the first letter of a word, call the 'capitalizeWord' function with the 'word' parameter. It will return the word with the first letter capitalized.

```javascript
const word = "hello";
const capitalizedWord = capitalizeWord(word);
console.log(capitalizedWord);
// This will log 'Hello' to the console.
