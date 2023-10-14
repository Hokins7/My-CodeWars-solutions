/**
 * This JavaScript code defines a function 'countDevelopers' that counts the number of JavaScript developers coming from Europe in a list of developer objects.
 *
 * @param {Array} list - An array of developer objects.
 * @returns {number} - The number of JavaScript developers coming from Europe.
 */
function countDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].continent == 'Europe' && list[i].language == 'JavaScript') {
        count++;
      }
    }
    return count;
  }
  