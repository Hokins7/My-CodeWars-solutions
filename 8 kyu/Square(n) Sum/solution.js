/**
 * Calculate the sum of squares of numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} - The sum of squares of the numbers in the array.
 */
function squareSum(numbers) {
    let res = 0;
  
    for (let i = 0; i <= numbers.length - 1; i++) {
      // Math.pow(numbers[i], 2) squares the current element.
      res = res + Math.pow(numbers[i], 2);
    }
  
    return res;
  }
  