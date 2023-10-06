/**
 * Filter a list of names to find only friends with exactly 4 letters in their names.
 * @param {string[]} friends - An array of names to filter.
 * @returns {string[]} - An array of friend names with exactly 4 letters.
 */
function friend(friends) {
    return friends.filter(el => el.length === 4);
  }
  