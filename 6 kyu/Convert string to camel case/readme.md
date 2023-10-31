# Convert String to Camel Case

This JavaScript code defines a function 'toCamelCase' that converts dash/underscore delimited words into camel casing.

## Function 'toCamelCase'

The 'toCamelCase' function takes one parameter:

1. `str` (string): The input string to be converted to camel case.

### Returns

- `string`: The input string in camel case format.

### Usage

To convert a string to camel case, call the 'toCamelCase' function with the 'str' parameter.

```javascript
const inputString = "the-stealth-warrior";
const camelCaseString = toCamelCase(inputString);
console.log(camelCaseString);
// This will log "theStealthWarrior" to the console.
