/**
 * This JavaScript code defines a function 'sumSquares' that calculates the sum of the squares of each item in an array using the 'reduce' method.
 *
 * @param {number[]} array - The input array of numbers.
 * @returns {number} - The sum of the squares of the numbers in the array.
 */
let sumSquares = (array) => array.reduce((a, b) => a + b ** 2, 0);
