import { Request, Response } from "express";
import AppError from "../errors/appError";
import CreateLoanService from "../services/loanService";


export default class CreateLoanController {
    /**
    * Receives request and response, calls CreateLoanService(),
    * captures the output and returns a Promise.
    */
    async handle(request: Request, response: Response) {
        request.body.category = request.body.category.toUpperCase();
        const createLoan = new CreateLoanService();
        
        await createLoan.execute(request.body).then(
            res => {return response.status(201).send(res)}
        ).catch(
            (err: AppError) => {return response.status(err.statusCode).json({message: err.message})}
            );
    };
};