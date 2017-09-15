const add = require('../src/calculette').add;
const chai = require('chai');
const expect = chai.expect;


describe('calculette', () => {
    describe('addition', () => {
        it('should works with integers', () => {
            // Style BDD
            expect(add(1, 2)).to.equal(3);
        })
    });

    describe('soustraction', () => {

    });
});