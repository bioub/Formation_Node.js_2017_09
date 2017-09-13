const assert = require('assert');
const hello = require('./hello');

assert.strictEqual(hello('Romain'), 'Hello Romain');

console.log('Tous les tests passent');