# Coding Meetup #1 - Higher-Order Functions Series

## Description

This JavaScript code defines a function named 'countDevelopers' that counts the number of JavaScript developers coming from Europe in a list of developer objects.

### How It Works

- The 'countDevelopers' function takes one parameter, 'list,' which is an array of developer objects.

- It initializes a variable 'count' to 0 to keep track of the number of JavaScript developers from Europe.

- It iterates through the 'list' array using a for loop.

- For each developer object, it checks whether the 'continent' property is equal to 'Europe' and the 'language' property is equal to 'JavaScript.'

- If both conditions are met, it increments the 'count' variable by 1.

- After iterating through the entire array, the function returns the final 'count,' representing the number of JavaScript developers from Europe.

### Usage

To count the number of JavaScript developers coming from Europe in a list of developer objects, call the 'countDevelopers' function with the 'list' array as the parameter. It will return the count as a number.

```javascript
const developersList = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

const numberOfEuropeanJavaScriptDevelopers = countDevelopers(developersList);
console.log(numberOfEuropeanJavaScriptDevelopers); // This will log '1' to the console.
