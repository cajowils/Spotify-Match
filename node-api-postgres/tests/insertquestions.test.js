const chai = require('chai');
const expect = chai.expect;
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');

describe('Get profile questions from database after inserting mock data which uses GET method', function() {
  describe('GET /profilequestions', function() {
    it('should return a list of questions which we just inserted', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);

      const client = await pool.connect();
      try {
        // Insert mock data into the database
        await client.query("INSERT INTO profilequestions (questionid, questiontext) VALUES (9, 'Will you marry me?')");
        await client.query("INSERT INTO profilequestions (questionid, questiontext) VALUES (10, 'Do you know to code?')");
        // ... add more mock data as needed

        // Call the endpoint
        const res = await request.get('/profilequestions');

        // Assertions
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([
          { questionid: 9, questiontext: 'Will you marry me?' },
          { questionid: 10, questiontext: 'Do you know to code?' },
          // ... add more assertions as needed
        ]);
      } catch (err) {
        // console.error(err);
      } finally {
        client.release();
      }
    });
  });
});
