/**
 * @param {number} s1 - The first score.
 * @param {number} s2 - The second score.
 * @param {number} s3 - The third score.
 * @returns {string} - The letter grade associated with the average of the three scores.
 */
function getGrade(s1, s2, s3) {
    // Calculate the average of the three scores.
    let average = (s1 + s2 + s3) / 3;
    
    // Determine the letter grade based on the average score.
    if (90 <= average && average <= 100) return "A";
    else if (80 <= average && average < 90) return "B";
    else if (70 <= average && average < 80) return "C";
    else if (60 <= average && average < 70) return "D";
    else if (0 <= average && average < 60) return "F";
  }