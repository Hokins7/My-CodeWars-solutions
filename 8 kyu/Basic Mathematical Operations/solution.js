/**
 * This JavaScript code defines a function 'basicOp' that performs four basic mathematical operations based on the given operation and two values.
 *
 * @param {string} operation - The mathematical operation to perform (+, -, *, /).
 * @param {number} value1 - The first numeric value for the operation.
 * @param {number} value2 - The second numeric value for the operation.
 * @returns {number} - The result of the operation applied to value1 and value2.
 */
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
