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

    res
        .status(200)
        .json({
            message: `Hello, ${name}! You are ${age} year old`,
        });


}

export { getlandingResponse, sampleNameAndAge }