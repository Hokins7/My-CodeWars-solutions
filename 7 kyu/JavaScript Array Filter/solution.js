/**
 * This JavaScript code defines a function 'getEvenNumbers' that takes an array of numbers
 * and filters out the even numbers, returning a new array containing only even numbers.
 *
 * @param {Array} numbersArray - An array of numbers.
 * @returns {Array} - An array containing only the even numbers from the input array.
 */
function getEvenNumbers(numbersArray) {
    // Use the 'filter' method to create a new array containing only the even numbers.
    return numbersArray.filter(num => num % 2 == 0);
  }
  