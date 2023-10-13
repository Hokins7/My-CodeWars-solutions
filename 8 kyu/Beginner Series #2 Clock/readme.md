# Beginner Series #2 Clock

## Description

This JavaScript code defines a function named 'past' that calculates the time since midnight in milliseconds given the number of hours, minutes, and seconds.

### How It Works

- The 'past' function takes three parameters: 'h' for the number of hours (0 to 23), 'm' for the number of minutes (0 to 59), and 's' for the number of seconds (0 to 59).

- It calculates the time since midnight by multiplying the number of hours by 3600000 (to convert hours to milliseconds), the number of minutes by 60000 (to convert minutes to milliseconds), and the number of seconds by 1000 (to convert seconds to milliseconds).

- The function then adds these three values together to obtain the total time since midnight in milliseconds.

### Usage

To calculate the time since midnight in milliseconds, call the 'past' function with the number of hours 'h', minutes 'm', and seconds 's' as parameters. It will return the time since midnight in milliseconds.

```javascript
const hours = 0;
const minutes = 1;
const seconds = 1;
const timeSinceMidnight = past(hours, minutes, seconds);
console.log(timeSinceMidnight); // This will log '61000' to the console.
