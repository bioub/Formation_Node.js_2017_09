const assert = require('assert');
const calc = require('./calculette');
assert.strictEqual(calc.add(1, 2), 3, '1 + 2 = 3');

console.log('Tous les tests passent');