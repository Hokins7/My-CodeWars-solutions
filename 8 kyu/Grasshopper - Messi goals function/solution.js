/**
* @param {number} laLigaGoals - The number of goals scored in LaLiga.
 * @param {number} copaDelReyGoals - The number of goals scored in Copa del Rey.
 * @param {number} championsLeagueGoals - The number of goals scored in Champions League.
 * @returns {number} - The total number of goals scored in all three leagues.
 */
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}