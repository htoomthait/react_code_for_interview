import express from 'express';

import { getlandingResponse, sampleNameAndAge } from './controllers/GreetingController';
import { authenticate } from './controllers/AuthController';


// Initialize  the express app
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());


// Landing route 
app.get('/', getlandingResponse)


//Sample Name and age request respond
app.post('/api/data', sampleNameAndAge)


// Dummy Auth Api
app.post('/api/authenticate', authenticate)

export default app;