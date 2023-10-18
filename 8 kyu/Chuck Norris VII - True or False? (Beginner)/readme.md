# Chuck Norris VII - True or False? (Beginner)

## Description

This JavaScript code defines a function named 'ifChuckSaysSo' that always returns false. The function demonstrates a clever way to return false without using the word "false."

### How It Works

- The 'ifChuckSaysSo' function returns the result of applying a logical NOT operator (`!`) on the number 2.

- In JavaScript, the logical NOT operator negates a truthy value to false. Since 2 is a truthy value, applying the NOT operator on it results in false.

- This unique approach allows you to return false without explicitly using the word "false."

### Usage

To get the result of whether Chuck says "false," call the 'ifChuckSaysSo' function, which will always return false.

```javascript
const result = ifChuckSaysSo();
console.log(result); // This will always log 'false' to the console.
