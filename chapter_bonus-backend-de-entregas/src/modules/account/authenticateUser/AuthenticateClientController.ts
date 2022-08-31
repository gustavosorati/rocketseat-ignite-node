import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";


export class AuthenticateClientController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            username,
            password
        });
        
        console.log(result)

        return response.json(result)
    }
}