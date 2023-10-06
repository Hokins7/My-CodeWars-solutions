/**
 * This JavaScript code extends the String prototype with a method 'toJadenCase' that converts a string to Jaden Smith-style casing.
 *
 * @returns {string} - A new string with each word capitalized as Jaden Smith often does on Twitter.
 */
String.prototype.toJadenCase = function () {
    return this.split(' ')  // Split the input string into an array of words.
      .map(w => w[0].toUpperCase() + w.slice(1))  // Capitalize the first letter of each word and append the rest of the word.
      .join(' ');  // Join the words back together into a single string with spaces.
  };
  