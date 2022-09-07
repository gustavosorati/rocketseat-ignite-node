import { Request, Response, response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
    async handle(request: Request, response: Response) {

        const findAllAvailableUSeCase = new FindAllAvailableUseCase();
        const deliveries = await findAllAvailableUSeCase.execute();

        return response.json(deliveries);
    }
}