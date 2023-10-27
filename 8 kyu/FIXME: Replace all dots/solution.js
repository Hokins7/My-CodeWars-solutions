/**
 * This JavaScript code defines a function 'replaceDots' that replaces all dots in a string with dashes.
 *
 * @param {string} str - The input string in which dots need to be replaced.
 * @returns {string} - The string with dots replaced by dashes.
 */
function replaceDots(str) {
    // Use the 'replace' method with a regular expression to replace all dots with dashes.
    return str.replace(/[.]/g, '-');
  }
  