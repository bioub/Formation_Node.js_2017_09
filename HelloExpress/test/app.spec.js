const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('functionnal', () => {
    describe('index', () => {
        it('should be accessible', (done) => {
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should contains Welcome to Node.js', () => {

        });
    });

    describe('soustraction', () => {

    });
});