const chai = require('chai');
const expect = chai.expect;
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');
const profilequestions = require('../src/services/profilequestions.service');

describe('Get profile questions from database which uses GET method', function() {
  describe('GET /profilequestions', function() {
    it('should return a list of questions from the database', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);
      /*
      (async function() {
        const client = await pool.connect();
        // try {
            const res = await client.query('SELECT * FROM profilequestions ORDER BY questionid ASC');
            console.log(res.rows);
        //   const res = await client.query('SELECT * FROM profilequestions ORDER BY questionid ASC').then((data) => console.log(data)).catch((err) => console.log(err.message));
        //   console.log(res);
        //   console.log(res.rows);
        //   console.log(res.body);
        // } catch (error) {
        //   console.error(error);
        // } finally {
          client.release();
        // }
      })();
      */

      const client = await pool.connect();
      try {
        const res = await client.query('SELECT * FROM profilequestions ORDER BY questionid ASC');
        // console.log(res);
        // console.log(res.rows);
      } catch (err) {
        // console.error(err);
      } finally {
        client.release();
      }

      // Call the endpoint
      const res = await request.get('/profilequestions');

      // prints the data returned by the user
      // console.log(res.body);

      // Assertions
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.deep.equal([
        { questionid: 0, questiontext: 'Something interesting about me that no one expects is...' },
        { questionid: 1, questiontext: 'Are there any causes you are really passionate about?' },
        { questionid: 2, questiontext: 'Do you have a favorite quote?' },
        { questionid: 3, questiontext: 'If you could choose to relive one day, what would it be and why?' },
        { questionid: 4, questiontext: 'My love language is...' },
        { questionid: 5, questiontext: 'What\'s something you\'ve always wanted to learn how to do?' },
        { questionid: 6, questiontext: 'Do you play any instruments?' },
        { questionid: 7, questiontext: 'What was the best concert you\'ve been to?' },
        { questionid: 8, questiontext: 'If you could jam with any artist, who would it be?' }
      ]);      
    });
  });
});
