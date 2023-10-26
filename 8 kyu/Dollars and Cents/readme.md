# Dollars and Cents

This JavaScript code defines a function 'formatMoney' that formats a number as dollars and cents.

## Function 'formatMoney'

The 'formatMoney' function takes one parameter:

1. `amount` (number): The amount to format.

### Returns

- `string`: The formatted amount with a dollar sign ('$') and two decimal places.

### Usage

To format an amount, call the 'formatMoney' function with the 'amount' parameter.

```javascript
const amount = 39.99;
const formattedAmount = formatMoney(amount);
console.log(formattedAmount);
// This will log '$39.99' to the console.
