/**
 * This JavaScript code defines a function named 'greet' that takes a 'language' parameter.
 * It returns a greeting in the specified language if it exists in the database. If the language is not found,
 * it defaults to English or returns 'Welcome' in case of an invalid input.
 *
 * @param {string} language - The language for which to provide a greeting.
 * @returns {string} - The greeting in the specified language or 'Welcome' (default).
 */
function greet(language) {
    // Define a database object that stores greetings in various languages.
    let languageDatabase = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso',
    };
  
    // Return the greeting in the specified language or default to English if not found.
    return languageDatabase[language] || languageDatabase.english;
  }
  