const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');
const usersService = require('../src/services/users.service');

describe('Update User Test which uses PUT method', function() {
  describe('PUT /users/:id', function() {
    let updateUserMock;

    before(function() {
      // Create a mock of the usersService module
      updateUserMock = sinon.stub(usersService, 'updateUser');
      updateUserMock.resolves('User updated successfully');
    });

    after(function() {
      // Restore the original function
      updateUserMock.restore();
    });

    it('should update a user and return a success message', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);

        // Set up the data to send in the request
        const userData = {
        name: 'Amaan Sheikj',
        birthdate: '2001-02-14',
        email: 'amaan@example.com',
        gender: 'M',
        orientation: 'S',
        location: 'New York',
        pronouns: 'he/him',
        bio: 'OUR PLAN MATTERS',
        questionid1: 1,
        questionid2: 2,
        questionid3: 3,
        answer1: 'Answer 1',
        answer2: 'Answer 2',
        answer3: 'Answer 3',
        instagram: '_amaan_',
        };

      // Call the endpoint
      const res = await request.put(`/users/123`).send(userData);

      // Assertions
      expect(res.statusCode).to.equal(200);
    //   expect(res.body).to.deep.equal({ message: 'User updated successfully' });

      // Ensure the service method was called with the correct data
      expect(updateUserMock.calledWith('123', userData)).to.be.true;
    });
  });
});
