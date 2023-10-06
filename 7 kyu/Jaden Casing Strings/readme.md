# Jaden Casing Strings

## Description

This JavaScript code extends the String prototype with a method called 'toJadenCase.' It converts a given string to the style often used by Jaden Smith on Twitter, where each word is capitalized.

### How It Works

- The 'toJadenCase' method is added to the String prototype, allowing any string to use this method.

- It splits the input string into an array of words by using spaces as the delimiter.

- For each word, it capitalizes the first letter using 'toUpperCase()' and then appends the rest of the word using 'slice(1)' to keep the rest of the letters in their original case.

- Finally, it joins the words back together into a single string with spaces.

- The resulting string is in Jaden Smith-style casing, with each word capitalized.

### Usage

To convert a string to Jaden Smith-style casing, call the 'toJadenCase' method on the string. It will return the string with each word capitalized.

```javascript
const inputString = "how can mirrors be real if our eyes aren't real";
const jadenCased = inputString.toJadenCase();
console.log(jadenCased); // This will log 'How Can Mirrors Be Real If Our Eyes Aren't Real' to the console.
