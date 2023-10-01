/**
 * Check if a number is divisible by both x and y.
 * @param {number} n - The number to check for divisibility.
 * @param {number} x - The first divisor.
 * @param {number} y - The second divisor.
 * @returns {boolean} - `true` if n is divisible by both x and y, otherwise `false`.
 */
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
  }
  