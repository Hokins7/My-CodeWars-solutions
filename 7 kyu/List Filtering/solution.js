/**
 * This JavaScript code defines a function 'filter_list' that takes a list of non-negative integers
 * and strings and returns a new list with the strings filtered out.
 *
 * @param {Array} l - An array containing non-negative integers and strings.
 * @returns {Array} - A new array with only non-negative integers.
 */
function filter_list(l) {
    // Use the 'filter' method to create a new array containing only non-negative integers.
    return l.filter(el => Number.isInteger(el));
  }
  