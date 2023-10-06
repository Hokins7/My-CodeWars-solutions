/**
 * Check if a player is alive based on their health value.
 * @param {number} health - The player's health value.
 * @returns {boolean} - `true` if the player is alive (health > 0), `false` otherwise.
 */
function checkAlive(health) {
    if (health <= 0) {
      return false;
    }
    return true;
  }
  