/**
 * This JavaScript code defines a function 'highAndLow' that takes a string of space-separated numbers,
 * extracts the highest and lowest numbers, and returns them as a string.
 *
 * @param {string} numbers - A string of space-separated numbers.
 * @returns {string} - A string containing the highest and lowest numbers separated by a space.
 */
function highAndLow(numbers) {
    // Split the input string into an array of numbers, sort it in ascending order, and extract the lowest number.
    let min = numbers.split(' ').sort((a, b) => a - b).shift();
  
    // Split the input string into an array of numbers, sort it in descending order, and extract the highest number.
    let max = numbers.split(' ').sort((a, b) => b - a).shift();
  
    // Return a string containing the highest and lowest numbers separated by a space.
    return max + " " + min;
  }
  