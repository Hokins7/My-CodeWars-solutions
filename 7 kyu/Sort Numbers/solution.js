/**
 * This JavaScript code defines a function named 'solution' that sorts an array of numbers.
 * If the input array is empty or a null/nil value, it returns an empty array.
 *
 * @param {number[]} nums - The input array of numbers to be sorted.
 * @returns {number[]} - A sorted array of numbers or an empty array for empty/null input.
 */
let solution = (nums) => (nums || []).sort((a, b) => a - b);
