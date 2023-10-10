/**
 * This JavaScript code defines a function 'abbrevName' that converts a two-word name into initials.
 *
 * @param {string} name - The input name in the format "First Last."
 * @returns {string} - The initials of the name with a dot in between, in uppercase.
 */
function abbrevName(name) {
    let spl = name.split(' ');  // Split the input name into an array of words using the space as the delimiter.
    return (spl[0][0] + '.' + spl[1][0]).toUpperCase();  // Return the initials with a dot in uppercase.
  }
  