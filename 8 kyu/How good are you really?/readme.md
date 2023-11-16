# How Good Are You Really?

## Description

This JavaScript function, `betterThanAverage`, calculates the average test score of your class and determines if your score is better than the average.

### Usage

To check if your score is better than the average, call the `betterThanAverage` function with the array of your class's test scores (`classPoints`) and your test score (`yourPoints`).

```javascript
const classScores = [80, 75, 90, 85, 78];
const yourScore = 88;

const result = betterThanAverage(classScores, yourScore);
console.log(result); // This will log 'true' or 'false' to the console.