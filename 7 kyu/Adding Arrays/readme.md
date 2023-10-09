# Adding Arrays

## Description

This JavaScript code defines a function named 'arrAdder' that combines an array of letters into words in a sentence. The input array contains sub-arrays, each representing a word.

### How It Works

- The 'arrAdder' function takes a single parameter, 'arr,' which is an array of letters. Each sub-array represents a word.

- It initializes an empty string 'res' to store the result.

- The code iterates through the characters in each sub-array. It uses two nested loops to traverse the characters, first iterating through the sub-arrays (words) and then through the characters in each word.

- For each character, it appends it to the 'res' string.

- After processing all characters in the same position (i), it adds a space to separate the words.

- Finally, it trims any leading or trailing spaces and returns the sentence formed by combining the letters in the array.

### Usage

To combine an array of letters into a sentence, call the 'arrAdder' function with the input array as the parameter. It will return the sentence.

```javascript
const inputArray = [
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
];
const sentence = arrAdder(inputArray);
console.log(sentence); // This will log 'Just Live Life Man' to the console.
