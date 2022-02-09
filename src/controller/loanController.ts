import { Request, Response } from "express";
import CreateLoanService from "../services/loanService";

export default class CreateLoanController {
    async handle(request: Request, response: Response) {
        const createLoan = new CreateLoanService();

        await createLoan.execute(request.body).then(
            res => {return response.status(201).send(res)}
        ).catch(
            (err) => {return response.status(400).send(err)}
            );
    };
};