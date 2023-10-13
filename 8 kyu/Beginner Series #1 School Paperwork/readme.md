# Beginner Series #1 School Paperwork

## Description

This JavaScript code defines a function named 'paperwork' that calculates the number of blank pages needed for copying paperwork for classmates.

### How It Works

- The 'paperwork' function takes two parameters: 'n,' representing the number of classmates, and 'm,' representing the number of pages of paperwork.

- It checks whether 'n' or 'm' is less than or equal to 0 using an 'if' statement. If either of them is less than or equal to 0, the function returns 0, indicating that no blank pages are needed.

- If both 'n' and 'm' are greater than 0, it calculates the number of blank pages needed by multiplying 'n' and 'm' together, and returns the result.

### Usage

To calculate the number of blank pages needed for copying paperwork, call the 'paperwork' function with the number of classmates 'n' and the number of pages of paperwork 'm' as parameters. It will return the number of blank pages needed, or 0 if 'n' or 'm' is less than or equal to 0.

```javascript
const classmates = 5;
const paperworkPages = 5;
const blankPagesNeeded = paperwork(classmates, paperworkPages);
console.log(blankPagesNeeded); // This will log '25' to the console.

const classmates2 = -5;
const paperworkPages2 = 5;
const blankPagesNeeded2 = paperwork(classmates2, paperworkPages2);
console.log(blankPagesNeeded2); // This will log '0' to the console.
