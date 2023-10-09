/**
 * This JavaScript code defines a function 'twoOldestAges' that returns the two oldest ages from an array of numbers.
 *
 * @param {number[]} ages - The input array of numbers representing ages.
 * @returns {number[]} - An array containing the two highest ages, in ascending order.
 */
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);
