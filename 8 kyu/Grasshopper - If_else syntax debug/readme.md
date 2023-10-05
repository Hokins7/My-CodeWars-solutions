# Player Health Check Function

## Description

This JavaScript code defines a function called `checkAlive` to determine if a player is alive based on their health value.

### How It Works

- The function takes one parameter, `health`, which represents the player's health as a whole number.

- It evaluates `health` using a simple condition:
  - If `health` is greater than 0, the player is considered alive, and the function returns `true`.
  - If `health` is 0 or below, the player is considered not alive, and the function returns `false`.

### Usage

To use the `checkAlive` function, provide the player's health value as an argument, and it will return `true` if the player is alive or `false` if not.

```javascript
const playerHealth = 5; // Replace with the actual player's health value
const isAlive = checkAlive(playerHealth);
console.log(`Is the player alive? ${isAlive}`);
