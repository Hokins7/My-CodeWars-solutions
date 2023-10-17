/**
 * This JavaScript code defines a function 'capitalizeWord' that capitalizes the first letter of a given string.
 *
 * @param {string} word - The input string (a single word) to capitalize.
 * @returns {string} - The input string with the first letter capitalized.
 */
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1); // Capitalize the first letter and concatenate it with the rest of the string.
  }
  