const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');
const matchesService = require('../src/services/matches.service');

describe('Post Interest Test which uses POST method', function() {
  describe('POST /matches', function() {
    let postInterestMock;

    before(function() {
      // Create a mock of the matchesService module
      postInterestMock = sinon.stub(matchesService, 'postInterest');
      postInterestMock.resolves('Interests updated successfully');
    });

    after(function() {
      // Restore the original function
      postInterestMock.restore();
    });

    it('should post interest and return a success message', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);

      // Set up the data to send in the request
      const swipeData = {
        swiperid: 1,
        swipeeid: 2,
        liked: true,
      };

      // Call the endpoint
      const res = await request.post('/matches').send(swipeData);

      // Assertions
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Interests updated successfully');

      // Ensure the service method was called with the correct data
      expect(postInterestMock.calledWith(swipeData)).to.be.true;
    });
  });
});
