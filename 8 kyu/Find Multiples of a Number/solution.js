/**
 * This JavaScript code defines a function 'findMultiples' that returns a list of multiples of an integer up to a specified limit.
 *
 * @param {number} integer - The base integer for which multiples need to be found.
 * @param {number} limit - The maximum value to which multiples should be found.
 * @returns {number[]} - An array of multiples of 'integer' up to 'limit'.
 */
function findMultiples(integer, limit) {
    const multiples = [];
  
    for (let i = integer; i <= limit; i += integer) {
      multiples.push(i);
    }
  
    return multiples;
  }
  