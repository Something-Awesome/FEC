const request = require('supertest');
const app = require('../server/app');

// switch to mocha for testing server?
// https://mongoosejs.com/docs/jest.html

describe('Test the comment path', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/comment').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should response the GET method with 10 comments', (done) => {
    request(app).get('/comment').then((response) => {
      expect(response.body.length).toBe(10);
      done();
    });
  });

  test('It should response the POST method in /comment', (done) => {
    request(app)
      .post('/comment')
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  // TODO: how to get commentID? need to query db
  test('It should response the POST method in /reply', (done) => {
    request(app)
      .post('/reply')
      // .send({
      //   comment: 'This is a test comment',
      //   user: 'testUser',
      //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/polarity/128.jpg'
      // })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});