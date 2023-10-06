# Disemvowel Trolls

## Description

This JavaScript code defines a function named 'disemvowel' that helps neutralize trolls by removing all vowels (a, e, i, o, u) from a given string. It's case-insensitive and works for any string, excluding 'y' as a vowel.

### How It Works

- The 'disemvowel' function takes a single parameter, 'str,' which is the input string from which to remove vowels.

- It uses the 'replace' method with a regular expression `[aeiou]` to match and remove all occurrences of vowels (a, e, i, o, u) from the string. The 'g' flag ensures that all occurrences are replaced, and the 'i' flag makes the matching case-insensitive.

- The function returns a new string with all vowels removed.

### Usage

To remove vowels from a string, call the 'disemvowel' function with the input string as the parameter. It will return a new string with all vowels removed.

```javascript
const inputString = "This website is for losers LOL!";
const result = disemvowel(inputString);
console.log(result); // This will log 'Ths wbst s fr lsrs LL!' to the console.
