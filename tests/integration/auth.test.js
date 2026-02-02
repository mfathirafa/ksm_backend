const request = require('supertest');
const app = require('../../src/app');

describe('POST /login', () => {
    it('should return token when credentials valid', async () => {
        const res = await request(app)
        .post('/login')
        .send({
            email: 'rafa@gmail.com',
            password: '123456'
        });
        console.log('STATUS:', res.statusCode);
        console.log('BODY:', res.body);

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
    })
})