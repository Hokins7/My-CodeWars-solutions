/**
 * This JavaScript code defines a function 'cockroachSpeed' that converts the speed from kilometers per hour (km/h) to centimeters per second (cm/s) and returns the result as an integer (rounded down).
 *
 * @param {number} s - The speed in kilometers per hour (km/h), which is expected to be a non-negative real number.
 * @returns {number} - The speed in centimeters per second (cm/s) as an integer (rounded down).
 */
function cockroachSpeed(s) {
    return Math.floor(s * 27.777778);
  }
  