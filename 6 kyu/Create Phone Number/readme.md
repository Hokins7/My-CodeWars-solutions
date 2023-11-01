# Create Phone Number

This JavaScript code defines a function 'createPhoneNumber' that accepts an array of 10 integers and returns a formatted phone number string.

## Function 'createPhoneNumber'

The 'createPhoneNumber' function takes one parameter:

1. `n` (number[]): An array of 10 integers between 0 and 9.

### Returns

- `string`: A phone number string in the format "(XXX) XXX-XXXX".

### Usage

To create a phone number from an array of integers, call the 'createPhoneNumber' function with the 'n' parameter.

```javascript
const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const phoneNumber = createPhoneNumber(phoneNumberArray);
console.log(phoneNumber);
// This will log "(123) 456-7890" to the console.
