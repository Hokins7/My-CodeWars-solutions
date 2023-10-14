# All Star Code Challenge #1

## Description

This JavaScript code defines a function named 'sumPPG' that takes two NBA player objects and calculates the sum of their Points Per Game (PPG).

### How It Works

- The 'sumPPG' function takes two parameters: 'playerOne' and 'playerTwo,' which are NBA player objects with a 'ppg' property representing their Points Per Game.

- It calculates the sum of PPG for the two players by adding the 'ppg' property of 'playerOne' and 'playerTwo.'

- The function returns the result as a number, which represents the sum of PPG for the two players.

### Usage

To calculate the sum of Points Per Game (PPG) for two NBA players, call the 'sumPPG' function with the two player objects as parameters. It will return the sum of PPG as a number.

```javascript
const iverson = { name: "Iverson", team: "76ers", ppg: 11.2 };
const jordan = { name: "Jordan", team: "Bulls", ppg: 20.2 };
const totalPPG = sumPPG(iverson, jordan);
console.log(totalPPG); // This will log '31.4' to the console.
