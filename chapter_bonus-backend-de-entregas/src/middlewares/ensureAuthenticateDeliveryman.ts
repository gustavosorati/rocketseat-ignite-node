import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}


export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) return response.status(401).json({
        message: "Token missing"
    });

    // Bearer token
    //[0] - Bearer
    //[1] - Token
    const [ , token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "4c96f8324e3ba54a99e78249b95daa11") as IPayload;

        request.id_deliveryman = sub;

        console.log(sub)
        return next();

    } catch(err){
        return response.status(401).json({
            message: "Invalid token!"
        });
    }
}