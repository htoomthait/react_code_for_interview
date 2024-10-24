import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";



const authenticate = (req: Request, res: Response) => {
    const { username, password } = req.body;
    let accessToken: string = "";
    let authorized: boolean = false;
    let isValidRequest = true;
    let respErrorMessage = [];


    if (username == "" || username == undefined) {
        const usernameError = { username: "username is missing" };
        isValidRequest = false;
        respErrorMessage.push(usernameError);
    }

    if (password == "" || password == undefined) {
        const passwordError = { password: "password is missing" };
        isValidRequest = false;
        respErrorMessage.push(passwordError);
    }

    if (!isValidRequest === true) {
        res
            .status(422)
            .json({
                status: "invalid",
                message: "invalid request",
                access_token: "",
                errorMsg: respErrorMessage
            })
    }

    if (username == "admin" && password == "admin1234") {
        authorized = true;
    }

    if (authorized === true) {
        accessToken = uuidv4();
        res
            .status(200)
            .json({
                status: "OK",
                message: "Authenticated successfully!",
                access_token: accessToken
            })
    }
    else {
        res
            .status(403)
            .json({
                status: "unauthorized",
                message: "Username or password or both could be wrong!",
                access_token: ""
            })
    }


}


export { authenticate }