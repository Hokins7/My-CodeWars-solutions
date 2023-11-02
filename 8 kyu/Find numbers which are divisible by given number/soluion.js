/**
 * This JavaScript code defines a function 'divisibleBy' that filters numbers in an array that are divisible by a given divisor.
 *
 * @param {number[]} numbers - An array of numbers.
 * @param {number} divisor - The divisor to check for divisibility.
 * @returns {number[]} - An array of numbers that are divisible by the given divisor.
 */
function divisibleBy(numbers, divisor) {
    return numbers.filter((el) => el % divisor === 0);
  }
  