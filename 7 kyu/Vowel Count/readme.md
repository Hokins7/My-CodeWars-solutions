# Vowel Count

## Description

This JavaScript code defines a function named 'getCount' that counts the number of vowels (a, e, i, o, u) in a given string. It's case-insensitive and works only with lowercase letters and spaces.

### How It Works

- The 'getCount' function takes a single parameter, 'str,' which is the input string in which to count vowels.

- It defines an array of vowels, including "a," "e," "i," "o," and "u."

- The function iterates through each character in the input string using a 'for...of' loop.

- For each character, it checks if the character is a vowel by testing if it's included in the 'vowels' array.

- If the character is a vowel, the 'vowelsCount' variable is incremented.

- Finally, the function returns the count of vowels in the input string.

### Usage

To count the number of vowels in a string, call the 'getCount' function with the input string as the parameter. It will return the count of vowels.

```javascript
const inputString = "hello world";
const vowelCount = getCount(inputString);
console.log(vowelCount); // This will log '3' to the console.
