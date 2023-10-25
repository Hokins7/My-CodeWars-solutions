/**
 * This JavaScript code defines a function 'validateHello' that checks if a string contains a greeting in different languages.
 *
 * @param {string} greetings - The input string to check for greetings.
 * @returns {boolean} - True if the string contains a greeting, false otherwise.
 */
function validateHello(greetings) {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
  }
  