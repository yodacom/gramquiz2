const request = require('supertest');
const expect = require('expect');
const app = require('../app.js');
const mockery = require('mockery');
const nodemailerMock = require('nodemailer-mock');


// describe('GET /', () => {
//   it('should return 200 OK', (done) => {
//     request(app)
//       .get('/')
//       .expect(200, done);
//   });
// });

// describe('GET /login', () => {
//   it('should return 200 OK', (done) => {
//     request(app)
//       .get('/login')
//       .expect(200, done);
//   });
// });

// describe('GET /signup', () => {
//   it('should return 200 OK', (done) => {
//     request(app)
//       .get('/signup')
//       .expect(200, done);
//   });
// });

// describe('GET /api', () => {
//   it('should return 200 OK', (done) => {
//     request(app)
//       .get('/api')
//       .expect(200, done);
//   });
// });

describe('GET /contact', () => {

    before(function() {
        // Enable mockery to mock objects
        mockery.enable({
            warnOnUnregistered: false,
        });

        /* Once mocked, any code that calls require('nodemailer')
        will get our nodemailerMock */
        mockery.registerMock('nodemailer', nodemailerMock)

        // IMPORTANT!
        /* Make sure anything that uses nodemailer is loaded here,
        after it is mocked... */
    });

    afterEach(function() {
        // Reset the mock back to the defaults after each test
        nodemailerMock.mock.reset();
    });

    after(function() {
        // Remove our mocked nodemailer and disable mockery
        mockery.deregisterAll();
        mockery.disable();
    });


  it('should return 200 OK', (done) => {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
