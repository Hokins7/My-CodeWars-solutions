/**
 * This JavaScript code defines a function 'createPhoneNumber' that accepts an array of 10 integers and returns a formatted phone number string.
 *
 * @param {number[]} n - An array of 10 integers between 0 and 9.
 * @returns {string} - A phone number string in the format "(XXX) XXX-XXXX".
 */
function createPhoneNumber(n) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
  }
  