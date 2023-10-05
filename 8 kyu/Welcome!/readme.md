# Welcome!

## Description

This JavaScript code provides a 'greet' function that welcomes visitors to a website in their own language based on a provided 'language' parameter. The supported languages are stored in a database, and the function returns a greeting in the specified language. If the input language is not in the database or is invalid, it defaults to English with the greeting 'Welcome.'

### How It Works

- The 'greet' function takes a single parameter, 'language,' which is a string representing the desired language for the greeting.

- It uses a database object, 'languageDatabase,' to store greetings in various languages. If the specified language exists in the database, it returns the corresponding greeting.

- If the 'language' is not found in the database, the function defaults to English and returns 'Welcome.'

### Usage

To use the 'greet' function, pass the desired language as a string parameter. It will return a greeting in that language or 'Welcome' if the language is not supported.

```javascript
const userLanguage = 'french';
const greeting = greet(userLanguage);
console.log(greeting); // This will log 'Bienvenue' to the console.
