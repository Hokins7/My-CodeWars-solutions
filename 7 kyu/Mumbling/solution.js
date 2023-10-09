/**
 * This JavaScript code defines a function 'accum' that transforms a given string according to the 'mumbling' pattern.
 *
 * @param {string} s - The input string to be transformed.
 * @returns {string} - The transformed string following the 'mumbling' pattern.
 */
function accum(s) {
    const result = [];  // Initialize an empty array to store intermediate strings.
    const lowerStr = s.toLowerCase();  // Convert the input string to lowercase.
  
    // Iterate through each character in the lowercase version of the input string.
    for (let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase();  // Create a string with the current character in uppercase.
  
      // Append the lowercase version of the current character 'i' times, where 'i' is the index.
      for (let j = 0; j < i; j++) {
        str += lowerStr[i];
      }
  
      result.push(str);  // Add the constructed string to the 'result' array.
    }
  
    return result.join("-");  // Join the intermediate strings with hyphens and return the result.
  }
  