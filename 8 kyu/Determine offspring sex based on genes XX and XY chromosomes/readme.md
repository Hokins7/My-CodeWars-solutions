# Determine Offspring Sex Based on Genes

This JavaScript code defines a function 'chromosomeCheck' that determines the sex of the offspring based on the presence of X or Y chromosomes.

## Function 'chromosomeCheck'

The 'chromosomeCheck' function takes one parameter, 'sperm,' which is a string representing the type of sperm containing either 'XX' or 'XY' chromosomes.

### Parameters

- `sperm` (string): The type of sperm, either 'XX' or 'XY'.

### Returns

- `string`: A message indicating the sex of the offspring. It will return "Congratulations! You're going to have a son." if 'sperm' is 'XY' and "Congratulations! You're going to have a daughter." if 'sperm' is 'XX'.

### Usage

To determine the sex of the offspring based on the type of sperm, call the 'chromosomeCheck' function with the 'sperm' parameter.

```javascript
const result = chromosomeCheck('XY');
console.log(result);
// This will log "Congratulations! You're going to have a son." to the console.
