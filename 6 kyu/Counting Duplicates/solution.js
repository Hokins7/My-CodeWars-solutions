/**
 * This JavaScript code defines a function 'duplicateCount' that counts the number of distinct case-insensitive alphabetic characters and numeric digits
 * that occur more than once in the input string.
 *
 * @param {string} text - The input string to count duplicates from.
 * @returns {number} - The count of distinct case-insensitive characters that occur more than once.
 */
function duplicateCount(text) {
    // Convert the input string to lowercase and split it into an array of characters.
    const splitString = text.toLowerCase().split("").sort();
    let results = [];
  
    // Iterate through the sorted array to find duplicate characters.
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === splitString[i + 1]) {
        results.push(splitString[i]);
      }
    }
  
    // Create a Set from the results array to ensure distinct values and return its size.
    const setArray = new Set(results);
    return setArray.size;
  }
  