/**
 * This function, findAverage, calculates the mean (average) of an array of numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - The mean of the numbers in the array.
 */
var findAverage = function (nums) {
    return nums.reduce((el1, el2) => el1 + el2) / nums.length;
  };
  