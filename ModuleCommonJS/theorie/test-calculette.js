const assert = require('assert');
const calculette = require('./calculette');
assert.strictEqual(calculette.add(1, 2), 3, '1 + 2 = 3');

console.log('Tous les tests passent');
