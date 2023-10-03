/**
 * Determine if the sum of a list of integers is odd or even.
 * @param {number[]} array - An array of integers.
 * @returns {string} - 'even' if the sum is even, 'odd' if it's odd.
 */
function oddOrEven(array) {
    // Use the reduce() method to calculate the sum of the integers in the array.
    let sum = array.reduce((partialSum, a) => partialSum + a, 0);
    
    // Check if the sum is even or odd using the modulo operator (%).
    if (sum % 2 === 0) return "even";
    else return "odd";
  }
  