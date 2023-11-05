/**
 * Given two arrays of strings a1 and a2, this function returns a sorted array of strings from a1 that are substrings of strings in a2.
 */
function inArray(array1, array2) {
    // Join the strings in array2 into a single string
    let arr = array2.join(" ");
    
    // Filter the strings in array1 that are substrings of the joined string
    return array1.filter(i => arr.search(i) !== -1 && i !== undefined).sort();
  }
  