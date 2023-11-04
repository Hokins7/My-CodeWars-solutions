# For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

## Description

This is a beginner-friendly kata, especially for UFC/MMA fans. It simulates a fight between two legends: Conor McGregor and George Saint Pierre in Madison Square Garden. After the fight, the winner will make a legendary statement. Your task is to return the right statement depending on the winner!

- If the winner is George Saint Pierre, he will say: "I am not impressed by your performance."
- If the winner is Conor McGregor, he will say: "I'd like to take this chance to apologize.. To absolutely NOBODY!"

Note that the given name may vary in casing (e.g., "George Saint Pierre" or "geOrGe saiNT pieRRE"). Your solution should treat both as the same thing (case-insensitive).

### Example

```javascript
console.log(quote("George Saint Pierre")); // "I am not impressed by your performance"
console.log(quote("Conor McGregor")); // "I'd like to take this chance to apologize.. To absolutely NOBODY!"
