/**
 * This JavaScript code defines a function 'areaOrPerimeter' that calculates the area of a square or the perimeter of a rectangle based on its dimensions.
 *
 * @param {number} x - The length of the 4-sided polygon.
 * @param {number} y - The width of the 4-sided polygon.
 * @returns {number} - The area if it's a square, or the perimeter if it's a rectangle.
 */
const areaOrPerimeter = function(x, y) {
    return x == y ? x * y : 2 * (x + y);
  };
  