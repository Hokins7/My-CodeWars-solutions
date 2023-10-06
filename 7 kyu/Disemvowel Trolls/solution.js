/**
 * This JavaScript code defines a function named 'disemvowel' that removes all vowels from a given string.
 *
 * @param {string} str - The input string from which to remove vowels.
 * @returns {string} - A new string with all vowels (a, e, i, o, u) removed.
 */
let disemvowel = (str) => {
    // Use the 'replace' method with a regular expression to remove all vowels (case-insensitive).
    return str.replace(/[aeiou]/gi, '');
  };
  