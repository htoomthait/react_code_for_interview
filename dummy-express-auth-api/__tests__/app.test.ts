import request from 'supertest';
import app from '../src/app'

describe('GET /', () => {
    it('should respond with a message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.message).toBe('Welcome from Dummy Express Auth System');
    });
});


describe('POST /api/data', () => {
    it('should return 201 and the message with the provided name', async () => {
        const name = "John";
        const age = 30;
        const response = await request(app)
            .post('/api/data')
            .send({ name: name, age: age });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe(`Hello, ${name}! You are ${age} year old`);
    });

    it('should return 422 if the name and the age are missing', async () => {
        const response = await request(app)
            .post('/api/data')
            .send({});
        expect(response.status).toBe(422);
        expect(response.body.errorMsg[0]).toStrictEqual({ "name": "name is missing" });
        expect(response.body.errorMsg[1]).toStrictEqual({ "age": "age is missing" });
    });
});

export { app }

