/**
 * This JavaScript code defines a function 'sumTwoSmallestNumbers' that returns the sum of the two lowest positive numbers from an array.
 *
 * @param {number[]} numbers - An array of positive integers (minimum 4 elements).
 * @returns {number} - The sum of the two lowest positive numbers.
 */
function sumTwoSmallestNumbers(numbers) {
    let [a, b] = numbers.filter(num => num > 0).sort((a, b) => a - b).slice(0, 2);
    return a + b;
  }
  