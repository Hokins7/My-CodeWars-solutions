/**
 * This JavaScript code defines a function 'toCamelCase' that converts dash/underscore delimited words into camel casing.
 *
 * @param {string} str - The input string to be converted to camel case.
 * @returns {string} - The input string in camel case format.
 */
function toCamelCase(str) {
    // Use regular expression to replace dashes/underscores followed by a word character with the uppercase version of the word character.
    return str.replace(/[-_]\w/g, function (match) {
      return match.charAt(1).toUpperCase();
    });
  }
  