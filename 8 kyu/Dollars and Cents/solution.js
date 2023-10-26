/**
 * This JavaScript code defines a function 'formatMoney' that formats a number as dollars and cents.
 *
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted amount as a string.
 */
function formatMoney(amount) {
    // Use the 'toFixed' method to format the number with two decimal places and add the dollar sign.
    return `$${amount.toFixed(2)}`;
  }
  