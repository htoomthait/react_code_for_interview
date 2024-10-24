import { Request, Response } from "express";



const getlandingResponse = (req: Request, resp: Response) => {
    console.log("you are requesting the landing route");
    resp.json({
        status: "OK",
        message: "Welcome from Dummy Express Auth System"
    });
}

export { getlandingResponse }