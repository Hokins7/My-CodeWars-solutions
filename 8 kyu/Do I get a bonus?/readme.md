# Do I Get a Bonus?

This JavaScript code defines a function 'bonusTime' that calculates the total salary based on a salary amount and a bonus flag.

## Function 'bonusTime'

The 'bonusTime' function takes two parameters:

1. `salary` (number): The base salary amount.
2. `bonus` (boolean): A flag indicating whether a bonus should be added.

### Returns

- `string`: The total salary with the currency symbol '£' (pound) if the bonus is true, or without the bonus.

### Usage

To calculate the total salary, call the 'bonusTime' function with the 'salary' and 'bonus' parameters.

```javascript
const baseSalary = 50000;
const isBonus = true;
const totalSalary = bonusTime(baseSalary, isBonus);
console.log(totalSalary);
// This will log '£500000' to the console.
