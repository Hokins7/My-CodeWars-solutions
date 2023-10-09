/**
 * This JavaScript code defines a function 'arrAdder' that combines an array of letters into words in a sentence.
 *
 * @param {string[][]} arr - The input array of letters, where each sub-array represents a word.
 * @returns {string} - A sentence formed by combining the letters in the array.
 */
function arrAdder(arr) {
    let res = '';  // Initialize an empty string to store the result.
  
    // Iterate through the characters in each sub-array of the input array.
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
        res += arr[j][i];  // Append the character at position (j, i) to the result string.
      }
      res += ' ';  // Add a space to separate words.
    }
  
    return res.trim();  // Remove any leading/trailing spaces and return the sentence.
  }
  