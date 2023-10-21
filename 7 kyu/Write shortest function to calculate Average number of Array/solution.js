/**
 * This JavaScript code defines a function 'avg' that calculates the average of an array of integers.
 *
 * @param {number[]} a - An array of integers.
 * @returns {number} - The average of the input numbers.
 */
let avg = (a) => {
    return a.reduce((n1, n2) => n1 + n2) / a.length;
  };
  