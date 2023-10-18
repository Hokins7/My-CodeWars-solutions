/**
 * This JavaScript code defines a function 'century' that calculates the century of a given year.
 *
 * @param {number} year - The input year to determine its century.
 * @returns {number} - The calculated century based on the input year.
 */
function century(year) {
    // Calculate the century by dividing the year by 100 and rounding up to the nearest integer using 'Math.ceil'.
    return Math.ceil(year / 100);
  }
  