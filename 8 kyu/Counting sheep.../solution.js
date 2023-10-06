/**
 * Count the number of sheep present in an array.
 * @param {boolean[]} arrayOfSheep - An array of boolean values representing the presence of sheep.
 * @returns {number} - The count of sheep that are present (true) in the array.
 */
function countSheeps(arrayOfSheep) {
    let sum = 0;
    for (let i = 0; i <= (arrayOfSheep.length - 1); i++) {
      if (arrayOfSheep[i] === true) {
        sum++;
      }
    }
    return sum;
  }
  