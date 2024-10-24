import request from 'supertest';
import app from '../src/app'

describe('/api/authenticate', () => {


    it("should respond 422 if username or password are missing", async () => {
        const response = await request(app)
            .post('/api/authenticate')
            .send({});
        expect(response.status).toBe(422);
        expect(response.body.errorMsg[0]).toStrictEqual({ "username": "username is missing" });
        expect(response.body.errorMsg[1]).toStrictEqual({ "password": "password is missing" });

    })

    it("should authenticate successfully with provided data and respond with access token", async () => {
        const username = "admin";
        const password = "admin1234";
        const response = await request(app)
            .post('/api/authenticate')
            .send({ username: username, password: password });
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body.message).toBe("Authenticated successfully!");
        expect(response.body.access_token).not.toBe("");
    })

    it("cannot authenticate with provided data and respond with blank access token", async () => {
        const username = "wefwef";
        const password = "alnk24";
        const response = await request(app)
            .post('/api/authenticate')
            .send({ username: username, password: password });
        expect(response.status).toBe(403);
        expect(response.body.status).toBe("unauthorized");
        expect(response.body.message).toBe("Username or password or both could be wrong!");
        expect(response.body.access_token).toBe("");
    })
})