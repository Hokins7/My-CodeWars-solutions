# Grasshopper - Messi Goals Function

## Description

This JavaScript function, `goals`, calculates the total number of goals scored by soccer player Messi in three different leagues: LaLiga, Copa del Rey, and Champions League. The function takes three parameters representing the number of goals scored in each league and returns the total.

## Usage

To use this function, call `goals` with the number of goals scored in LaLiga, Copa del Rey, and Champions League as parameters, and it will return the total number of goals.

```javascript
const laLigaGoals = 5;
const copaDelReyGoals = 10;
const championsLeagueGoals = 2;

const totalGoals = goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals);
console.log(totalGoals); // This will log '17' to the console.
