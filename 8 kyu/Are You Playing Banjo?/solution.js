/**
 * This JavaScript code defines a function 'areYouPlayingBanjo' that determines whether a person is playing the banjo based on their name.
 *
 * @param {string} name - The input name to check for banjo playing.
 * @returns {string} - A message indicating whether the person is playing the banjo or not.
 */
function areYouPlayingBanjo(name) {
    return name.split("")[0].toLowerCase() == "r"
      ? name + " plays banjo"
      : name + " does not play banjo";
  }
  