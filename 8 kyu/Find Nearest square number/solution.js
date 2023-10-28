/**
 * This JavaScript code defines a function 'nearestSq' that finds the nearest square number to a positive integer 'n'.
 *
 * @param {number} n - The positive integer for which the nearest square number should be found.
 * @returns {number} - The nearest square number to 'n'.
 */
function nearestSq(n) {
    // Calculate the square root of 'n' and round it to the nearest integer.
    const sqrtN = Math.round(Math.sqrt(n));
    
    // Calculate the nearest square by squaring the rounded square root value.
    const nearestSquare = Math.pow(sqrtN, 2);
    
    return nearestSquare;
  }
  