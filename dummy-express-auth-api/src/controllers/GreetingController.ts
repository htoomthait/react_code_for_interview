import { Request, Response } from "express";




const getlandingResponse = (req: Request, resp: Response) => {
    console.log("you are requesting the landing route");
    resp
        .status(200)
        .json({
            status: "OK",
            message: "Welcome from Dummy Express Auth System"
        });
}

const sampleNameAndAge = (req: Request, res: Response) => {
    const { name, age } = req.body;
    let isValidRequest = true;
    let respErrorMessage = [];

    if (name == "" || name == undefined) {
        const nameError = { name: "name is missing" };
        isValidRequest = false;
        respErrorMessage.push(nameError);
    }

    if (age == "" || age == undefined) {
        const ageError = { age: "age is missing" };
        isValidRequest = false;
        respErrorMessage.push(ageError);
    }

    if (isValidRequest) {
        res
            .status(201)
            .json({
                message: `Hello, ${name}! You are ${age} year old`,
            });
    }
    else {
        res
            .status(422)
            .json({
                message: `invalid request`,
                errorMsg: respErrorMessage
            });
    }




}

export { getlandingResponse, sampleNameAndAge }