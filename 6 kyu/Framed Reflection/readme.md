# Framed Reflection

This JavaScript code defines a function 'mirror' that mirrors a message by reversing its characters and framing it.

## Function 'mirror'

The 'mirror' function takes one parameter:

1. `text` (string): The input message to be mirrored.

### Returns

- `string`: The mirrored message enclosed in a frame.

### Usage

To mirror a message and frame it, call the 'mirror' function with the 'text' parameter.

```javascript
const originalMessage = 'Hello World';
const mirroredMessage = mirror(originalMessage);
console.log(mirroredMessage);
// This will log the mirrored message enclosed in a frame.
