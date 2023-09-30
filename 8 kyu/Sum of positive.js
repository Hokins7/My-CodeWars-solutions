/**
 * Calculate the sum of all positive numbers in an array.
 * @param {Array} arr - An array of numbers.
 * @returns {number} - The sum of all positive numbers in the array.
 */
function positiveSum(arr) {
    // Initialize a variable to store the sum.
    let sum = 0;
  
    // Loop through each element of the array.
    for (let i = 0; i <= arr.length - 1; i++) {
      // Check if the current element is greater than 0 (positive).
      if (arr[i] > 0) {
        // If positive, add it to the sum.
        sum = sum + arr[i];
      }
    }
  
    // Return the final sum of positive numbers.
    return sum;
  }