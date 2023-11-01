/**
 * This JavaScript code defines a function 'mirror' that mirrors a message by reversing its characters.
 *
 * @param {string} text - The input message to be mirrored.
 * @returns {string} - The mirrored message enclosed in a frame.
 */
function mirror(text) {
    // Calculate the number of stars required to frame the message.
    let stars = Math.max(...text.split(" ").map((v) => v.length)) + 4;
    // Calculate the number of spaces to maintain left alignment.
    let space = Math.max(...text.split(" ").map((v) => v.length));
    // Split the text into words, reverse each word, add spaces for alignment, and join with newlines.
    let arr = text
      .split(" ")
      .map(
        (v) => '\n* ' + v.split("").reverse().join("") + ' '.repeat(space - v.length) + ' *\n'
      )
      .join("")
      .replace(/\*\n\n\*/g, '*\n*');
    // Create the framed mirror message with stars.
    return '*'.repeat(stars) + arr + '*'.repeat(stars);
  }
  