/**
 * This JavaScript code defines a function 'paperwork' that calculates the number of blank pages needed for copying paperwork for classmates.
 *
 * @param {number} n - The number of classmates.
 * @param {number} m - The number of pages of paperwork.
 * @returns {number} - The number of blank pages needed, or 0 if n or m is less than or equal to 0.
 */
function paperwork(n, m) {
    if (n <= 0 || m <= 0) {
      return 0;
    } else {
      return n * m;
    }
  }
  