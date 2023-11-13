# Grasshopper - Grade Book

## Description

This JavaScript function, `getGrade`, calculates the average of three scores and returns the letter grade associated with that average, following a predefined grading scale. The grading criteria are as follows:

- Numerical Score	| Letter Grade
- ----------------- | ------------
- 90 <= score <= 100 | 'A'
- 80 <= score < 90   | 'B'
- 70 <= score < 80   | 'C'
- 60 <= score < 70   | 'D'
- 0 <= score < 60    | 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

## Usage

To use this function, call `getGrade` with three numerical scores as parameters, and it will return the corresponding letter grade.

```javascript
const score1 = 85;
const score2 = 92;
const score3 = 78;

const grade = getGrade(score1, score2, score3);
console.log(grade); // This will log 'B' to the console.
