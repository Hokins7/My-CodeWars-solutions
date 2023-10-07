# Get the Middle Character

## Description

This JavaScript code defines a function named 'getMiddle' that extracts the middle character(s) from a given word. If the word's length is odd, it returns the middle character; if it's even, it returns the middle 2 characters.

### How It Works

- The 'getMiddle' function takes a single parameter, 's,' which is the input word from which to extract the middle character(s).

- It first initializes an empty 'middle' string to hold the result.

- The code checks if the length of the input word is odd or even using the remainder operator `%`.

- If the word's length is odd, it assigns the middle character to 'middle' by calculating the index `(s.length / 2) | 0`. The `| 0` is used to ensure that the result is an integer.

- If the word's length is even, it assigns the two middle characters to 'middle' by calculating the indices `(s.length / 2 - 1) | 0` and `(s.length / 2) | 0`.

- Finally, it joins the characters in the 'middle' array into a single string and returns the result.

### Usage

To get the middle character(s) of a word, call the 'getMiddle' function with the input word as the parameter. It will return the middle character(s) as a string.

```javascript
const word1 = "test";
const middle1 = getMiddle(word1);
console.log(middle1); // This will log 'es' to the console.

const word2 = "testing";
const middle2 = getMiddle(word2);
console.log(middle2); // This will log 't' to the console.
