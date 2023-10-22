/**
 * This JavaScript code defines a function 'digitize' that converts a non-negative number to an array of its digits in reverse order.
 *
 * @param {number} n - The non-negative number to be converted.
 * @returns {number[]} - An array of the number's digits in reverse order.
 */
function digitize(n) {
    let str = String(n);
    return str.split("").reverse().map((num) => {
      return Number(num);
    });
  }
  