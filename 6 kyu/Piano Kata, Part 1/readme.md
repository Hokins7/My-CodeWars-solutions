# Piano Kata, Part 1

This JavaScript code defines a function 'blackOrWhiteKey' that determines whether a key on the piano is black or white.

## Function 'blackOrWhiteKey'

The 'blackOrWhiteKey' function takes one parameter:

1. `c` (number): The number of the key (ranging from 1 to 10000).

### Returns

- `string`: Returns "black" if the key is black and "white" if it's white.

### Usage

To determine the color of a piano key, call the 'blackOrWhiteKey' function with the 'c' parameter.

```javascript
const keyNumber = 12;
const keyColor = blackOrWhiteKey(keyNumber);
console.log(keyColor);
// This will log "black".
