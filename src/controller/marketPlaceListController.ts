import { Request, Response } from "express";
import AppError from "../errors/appError";
import CreateMarketPlaceListService from "../services/marketPlaceListService";


export default class CreateMarketPlaceListController {
    /**
     * Receives request and response, calls CreateMarketPlaceListService(),
     * captures the output and returns a Promise.
     */
    async handle(request: Request, response: Response) {
        const { loanList, investmentList } = request.body;
        const createMarketPlaceList = new CreateMarketPlaceListService();

        await createMarketPlaceList.execute(loanList, investmentList).then(
            (res) => {return response.status(201).send(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
            }
        );
    };
};