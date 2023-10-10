# A Needle in the Haystack

## Description

This JavaScript code defines a function named 'findNeedle' that searches for the word "needle" in an array and returns a message indicating its position.

### How It Works

- The 'findNeedle' function takes a single parameter, 'haystack,' which is an array containing words.

- It uses the 'indexOf' method to find the position of the word "needle" in the array.

- The function returns a message that says "found the needle at position " followed by the index where "needle" was found in the array.

### Usage

To find the word "needle" in an array and get a message indicating its position, call the 'findNeedle' function with the input array as the parameter. It will return the message.

```javascript
const wordsArray = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const message = findNeedle(wordsArray);
console.log(message); // This will log 'found the needle at position 5' to the console.
