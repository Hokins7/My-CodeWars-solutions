/**
 * How good are you really?
 * 
 * Calculate the average test score of your class and determine if your score is better than the average.
 * 
 * @param {number[]} classPoints - An array containing test scores of your peers.
 * @param {number} yourPoints - Your test score.
 * @returns {boolean} - True if your score is better than the average, else False.
 */
function betterThanAverage(classPoints, yourPoints) {
    // Calculate the average test score of the class.
    let classAverage = classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length;
  
    // Compare your score with the class average.
    return yourPoints > classAverage;
  }
  