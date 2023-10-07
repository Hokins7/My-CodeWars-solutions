/**
 * This JavaScript code defines a function 'getMiddle' that returns the middle character(s) of a given word.
 * If the word's length is odd, it returns the middle character. If it's even, it returns the middle 2 characters.
 *
 * @param {string} s - The input word from which to extract the middle character(s).
 * @returns {string} - The middle character(s) of the word as a string.
 */
function getMiddle(s) {
    let middle = "";
  
    if (s.length % 2 === 1) {
      middle = [s[(s.length / 2) | 0]];
    } else {
      middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
    }
  
    return middle.join("");
  }
  