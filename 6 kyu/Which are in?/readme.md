# Which are in?

## Description

This JavaScript function, `inArray`, takes two arrays of strings, `array1` and `array2`, and returns a sorted array, `r`, containing the strings from `array1` that are substrings of the strings in `array2.

### How It Works

- The function starts by joining all the strings in `array2` into a single string, `arr`.

- It then filters the strings in `array1` to check if they are substrings of the joined string `arr`. It also checks if the string is not undefined.

- The filtered strings are then sorted in lexicographical order.

- The sorted array, `r`, is returned.

### Usage

To find substrings from `array1` in `array2`, call the `inArray` function with both arrays as parameters. It will return a sorted array with the matching substrings.

```javascript
const array1 = ["arp", "live", "strong"];
const array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
const result = inArray(array1, array2);
console.log(result);
// This may log '["arp", "live", "strong"]' to the console.
