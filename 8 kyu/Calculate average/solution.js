/**
 * This JavaScript code defines a function 'find_average' that calculates the average of the numbers in a given list.
 *
 * @param {number[]} array - An array of numbers.
 * @returns {number} - The average of the numbers in the list. Returns 0 for an empty array.
 */
function find_average(array) {
    if (array.length > 0) {
      let average = array.reduce((a, b) => a + b) / array.length; // Calculate the average by summing all elements and dividing by the array length.
      return average;
    } else {
      return 0; // Return 0 for an empty array.
    }
  }
  