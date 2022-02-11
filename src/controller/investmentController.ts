import { Request, Response } from "express";
import CreateInvestmentService from "../services/investmentService";

export default class CreateInvestmentController {
    async handle(request: Request, response: Response) {
        const createInvestment = new CreateInvestmentService();

        await createInvestment.execute(request.body).then(
            (res) => {return response.status(201).send(res)}
        ).catch(            
            (err) => {console.log(err);return response.status(400).send(err)}
        );
    };
};