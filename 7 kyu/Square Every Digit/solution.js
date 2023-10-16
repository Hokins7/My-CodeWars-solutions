/**
 * This JavaScript code defines a function 'squareDigits' that takes an integer and squares every digit
 * of the number, concatenating the squared digits into a new integer.
 *
 * @param {number} num - The integer to process.
 * @returns {number} - An integer with squared digits concatenated.
 */
function squareDigits(num) {
    let res = "";
    num = num.toString(); // Convert the number to a string for easier digit manipulation.
    for (let i = 0; i < num.length; i++) {
      res = res + (num[i] * num[i]).toString(); // Square each digit and concatenate the result.
    }
    return Number(res); // Convert the concatenated string back to an integer.
  }
  