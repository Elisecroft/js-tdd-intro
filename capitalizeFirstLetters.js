//capitalizeFirstLetters
const assert = require('assert');

//Function


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms 'I am a Wilder' correctly
assert.strictEqual(capitalizeFirstLetters('I am a Wilder'), 'I Am A Wilder');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('hello'), 'H');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');