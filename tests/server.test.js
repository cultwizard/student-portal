const request = require('supertest');
const app = require('../src/server');

describe('Student Portal API', () => {
  it('should return a 200 OK status for the index route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    // Since we are serving static files, we expect some HTML returned
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });

  it('should return a valid status message from /api/status', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'online');
    expect(res.body).toHaveProperty('message', 'Student Portal API is operational.');
  });
});
