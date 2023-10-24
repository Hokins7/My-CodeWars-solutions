/**
 * This JavaScript code defines a function 'chromosomeCheck' that determines the sex of the offspring based on the presence of X or Y chromosomes.
 *
 * @param {string} sperm - The type of sperm, either 'XX' or 'XY'.
 * @returns {string} - A message indicating the sex of the offspring.
 */
function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`;
  }
  