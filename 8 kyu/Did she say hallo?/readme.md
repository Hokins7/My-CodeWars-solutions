# Did She Say Hallo?

This JavaScript code defines a function 'validateHello' that checks if a string contains a greeting in different languages.

## Function 'validateHello'

The 'validateHello' function takes one parameter, 'greetings,' which is a string representing a message that might contain a greeting.

### Parameters

- `greetings` (string): The input string to check for greetings.

### Returns

- `boolean`: True if the string contains a greeting in any of the following languages: English, Italian, French, German, Spanish, Czech Republic, or Polish. It's case-insensitive.

### Usage

To check if a message contains a greeting, call the 'validateHello' function with the 'greetings' parameter.

```javascript
const message = "Ciao, how are you?";
const hasGreeting = validateHello(message);
console.log(hasGreeting);
// This will log 'true' to the console.
