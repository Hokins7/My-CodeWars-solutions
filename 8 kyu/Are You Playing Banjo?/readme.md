# Are You Playing Banjo?

## Description

This JavaScript code defines a function named 'areYouPlayingBanjo' that answers the question "Are you playing banjo?" based on the input name. If the name starts with the letter "R" or lowercase "r," the person is playing the banjo.

### How It Works

- The 'areYouPlayingBanjo' function takes a single parameter, 'name,' which is the name to check for banjo playing.

- It uses the 'split' method to break the name into an array of characters. It checks if the first character of the name, when converted to lowercase, is equal to "r."

- If the condition is true, it returns a message with the name followed by "plays banjo."

- If the condition is false, it returns a message with the name followed by "does not play banjo."

### Usage

To determine whether a person is playing the banjo based on their name, call the 'areYouPlayingBanjo' function with the input name as the parameter. It will return a message indicating whether the person is playing the banjo or not.

```javascript
const person1 = "Ruth";
const message1 = areYouPlayingBanjo(person1);
console.log(message1); // This will log 'Ruth plays banjo' to the console.

const person2 = "Sam";
const message2 = areYouPlayingBanjo(person2);
console.log(message2); // This will log 'Sam does not play banjo' to the console.
