import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from "uuid";
import { getlandingResponse } from './controllers/GreetingController';


// Initialize  the express app
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());


// Landing route 
app.get('/', getlandingResponse)


//Sample Name and age request respond
app.post('/api/data', (req: Request, res: Response) => {
    const { name, age } = req.body;

    res.json({
        message: `Hello, ${name}! You are ${age} year old`,
    });


})


// Dummy Auth Api
app.post('/api/authenticate', (req: Request, res: Response) => {
    const { username, password } = req.body;
    let accessToken: string = "";
    let authorized: boolean = false;

    if (username == "admin" && password == "admin1234") {
        authorized = true;
    }

    if (authorized) {
        accessToken = uuidv4();
        res.json({
            status: "OK",
            message: "Authenticated successfully!",
            access_token: accessToken
        })
    }
    else {
        res.json({
            status: "unauthorized",
            message: "Username or password or both could be wrong!",
            access_token: ""
        })
    }


})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


