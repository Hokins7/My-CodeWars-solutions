/**
 * This JavaScript code defines a function 'bonusTime' that calculates the total salary based on a salary amount and a bonus flag.
 *
 * @param {number} salary - The base salary amount.
 * @param {boolean} bonus - A flag indicating whether a bonus should be added.
 * @returns {string} - The total salary with currency symbol.
 */
function bonusTime(salary, bonus) {
    if (bonus) {
      return `£${salary * 10}`;
    } else {
      return `£${salary}`;
    }
  }
  