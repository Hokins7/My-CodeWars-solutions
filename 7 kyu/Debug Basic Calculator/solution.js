/**
 * Perform a basic mathematical operation on two numbers.
 * @param {number} a - The first number.
 * @param {string} o - The operator ('+', '-', '*', '/').
 * @param {number} b - The second number.
 * @returns {number|null} - The result of the operation, or null if the operator is invalid or division by zero occurs.
 */
var calculate = function calculate(a, o, b) {
    var result = null;
    
    if (o == "+") return a + b;
    else if (o == "-") return a - b;
    else if (o == "/" && b != 0) return a / b;
    else if (o == "*") return a * b;
    
    return result;
  };
  