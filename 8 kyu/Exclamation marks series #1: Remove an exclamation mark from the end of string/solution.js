/**
 * This JavaScript code defines a function 'remove' that removes an exclamation mark from the end of a string.
 *
 * @param {string} string - The input string.
 * @returns {string} - The string with the exclamation mark removed from the end, if it exists.
 */
function remove(string) {
    // Check if the last character of the string is an exclamation mark.
    if (string[string.length - 1] === '!') {
      // Remove the last character using 'slice'.
      return string.slice(0, -1);
    } else {
      return string;
    }
  }
  