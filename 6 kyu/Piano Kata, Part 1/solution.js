/**
 * This JavaScript code defines a function 'blackOrWhiteKey' that determines whether a key on the piano is black or white.
 *
 * @param {number} c - The number of the key (1 to 10000).
 * @returns {string} - Returns "black" if the key is black and "white" if it's white.
 */
function blackOrWhiteKey(c) {
    // Use modulo to determine the pattern of black and white keys.
    switch ((c - 1) % 88 % 12) {
      case 1:
      case 4:
      case 6:
      case 9:
      case 11:
        return "black";
      default:
        return "white";
    }
  }
  