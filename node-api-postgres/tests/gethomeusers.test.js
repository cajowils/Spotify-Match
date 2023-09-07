const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');
const homeService = require('../src/services/home.service');

describe('Get Home Users Test of a userID which uses GET method', function() {
  describe('GET /home/:id', function() {
    it('should return home user data from the database for the given id', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);

      // Set up the data to return
      const id = 0;
    
      const client = await pool.connect();
      try {
        const res = await client.query('SELECT * FROM users WHERE id != $1', [id]);
        // console.log(res);
        // console.log(res.rows);
      } catch (err) {
        // console.error(err);
      } finally {
        client.release();
      }
      
      // Spy on the homeService.getHome method
      const getHomeSpy = sinon.spy(homeService, 'getHome');
      
      // Call the endpoint
      const res = await request.get(`/home/${id}`);
     //   console.log(res.body);
      
     // Assertions
      expect(res.statusCode).to.equal(200);
        //   expect(res.body).to.deep.equal(mockData);

      // Ensure the service method was called with the correct id
    expect(getHomeSpy.calledWith(sinon.match(id))).to.be.true;
      
      // Restore the original function
      getHomeSpy.restore();
    });
  });
});

