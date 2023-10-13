# Beginner Series #4 Cockroach

## Description

This JavaScript code defines a function named 'cockroachSpeed' that converts the speed from kilometers per hour (km/h) to centimeters per second (cm/s) and returns the result as an integer (rounded down).

### How It Works

- The 'cockroachSpeed' function takes one parameter, 's,' representing the speed in kilometers per hour (km/h).

- It performs the conversion from km/h to cm/s by multiplying the speed 's' with the conversion factor, approximately 27.777778.

- To obtain the result as an integer rounded down, it uses the 'Math.floor' method.

- The function then returns the result as an integer representing the speed in centimeters per second (cm/s).

### Usage

To convert the speed from kilometers per hour (km/h) to centimeters per second (cm/s) and obtain the result as an integer, call the 'cockroachSpeed' function with the speed 's' as the parameter. It will return the speed in cm/s as an integer (rounded down).

```javascript
const speedInKmPerHour = 1.08;
const speedInCmPerSecond = cockroachSpeed(speedInKmPerHour);
console.log(speedInCmPerSecond); // This will log '30' to the console.
