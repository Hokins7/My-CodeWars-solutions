/**
 * This JavaScript code defines a function named 'getCount' that counts the number of vowels in a given string.
 *
 * @param {string} str - The input string in which to count vowels.
 * @returns {number} - The count of vowels (a, e, i, o, u) in the string.
 */
let getCount = (str) => {
    let vowelsCount = 0;
    
    // Define an array of vowels.
    const vowels = ["a", "e", "i", "o", "u"];
    
    // Iterate through each character in the input string.
    for (let char of str) {
      // Check if the character is a vowel by testing if it's included in the 'vowels' array.
      if (vowels.includes(char)) {
        vowelsCount++;
      }
    }
    
    // Return the count of vowels in the string.
    return vowelsCount;
  };
  