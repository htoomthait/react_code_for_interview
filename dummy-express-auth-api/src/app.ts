import express from 'express';

import { getlandingResponse, sampleNameAndAge } from './controllers/GreetingController';
import { authenticate } from './controllers/AuthController';

import cors from 'cors';


// Initialize  the express app
const app = express();

/* const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost'];
// const allowedOrigins = ['*'];

app.use(cors({
    origin: (origin: any, callback: any) => {
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
})); */

// Allow all origins
app.use(cors());




// Middleware to parse JSON request bodies
app.use(express.json());


// Landing route 
app.get('/', getlandingResponse)


//Sample Name and age request respond
app.post('/api/data', sampleNameAndAge)


// Dummy Auth Api
app.post('/api/authenticate', authenticate)

export default app;