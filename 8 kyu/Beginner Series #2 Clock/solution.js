/**
 * This JavaScript code defines a function 'past' that calculates the time since midnight in milliseconds given the number of hours, minutes, and seconds.
 *
 * @param {number} h - The number of hours (0 to 23).
 * @param {number} m - The number of minutes (0 to 59).
 * @param {number} s - The number of seconds (0 to 59).
 * @returns {number} - The time since midnight in milliseconds.
 */
function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
  }
  