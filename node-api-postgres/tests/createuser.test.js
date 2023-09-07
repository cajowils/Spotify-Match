const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../server'); // Your Express app instance
const request = require('supertest')(app);
const PgMock2 = require('pgmock2').default;
const { getPool } = require('pgmock2');
const usersService = require('../src/services/users.service');

describe('Create User Test which uses POST method', function() {
  describe('POST /users', function() {
    let createUserByIdMock;

    before(function() {
      // Create a mock of the usersService module
      createUserByIdMock = sinon.stub(usersService, 'createUserById');
      createUserByIdMock.resolves('User created successfully');
    });

    after(function() {
      // Restore the original function
      createUserByIdMock.restore();
    });

    it('should create a new user and return a success message', async function() {
      // Set up the mock database
      const pg = new PgMock2();
      const pool = getPool(pg);

      // Set up the data to send in the request
      const userData = {
        id: 699,
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
      const res = await request.post('/users').send(userData);

      // Assertions
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('User created successfully');

      // Ensure the service method was called with the correct data
      expect(createUserByIdMock.calledWith(userData)).to.be.true;
    });
  });
});
