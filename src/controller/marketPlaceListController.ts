import { Request, Response } from "express";
import CreateMarketPlaceListService from "../services/marketPlaceListService";

export default class CreateMarketPlaceListController {
    async handle(request: Request, response: Response) {
        const { loanList, investmentList } = request.body;
        const createMarketPlaceList = new CreateMarketPlaceListService();

        await createMarketPlaceList.execute(loanList, investmentList).then(
            (res) => {return response.status(201).send(res)}
        ).catch(
            (err) => {console.log(err);return response.status(400).send(err)}
        );
    };
};