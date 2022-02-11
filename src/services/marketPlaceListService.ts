import { getCustomRepository } from "typeorm";
import InvestmentRepository from "../repositories/investmentRepository";
import MarketPlaceItemRepository from "../repositories/marketPlaceItemRepository";
import { Investment, Loan } from "../types";
import CreateInvestmentService from "./investmentService";

export default class CreateMarketPlaceListService {
    public async execute(loanList: Loan[], investmentList: Investment[]){
        const marketPlaceItem = getCustomRepository(MarketPlaceItemRepository);
        const investmentRepo = getCustomRepository(InvestmentRepository);
        const createInvestment = new CreateInvestmentService();

        const marketPlacelist = [];

        for(let i=0; i<investmentList.length; i++){
            await createInvestment.execute(investmentList[i]);
        };

        for(let i = 0; i < loanList.length; i++) {
            const sql = `SELECT 
                            SUM("totalInvestedAmountCents")
                            FROM 
                                investments
                            WHERE
                                loan_id = '${loanList[i].id}'`;

            const [ totalInvestment ] = await investmentRepo.manager.query(sql);

            const newItem = marketPlaceItem.create({
                category: loanList[i].category,
                expiresAt: loanList[i].expiresAt,
                totalRequestedAmount: loanList[i].totalRequestedAmountCents,
                totalInvestmentAmount: parseInt(totalInvestment.sum)
            });

            await marketPlaceItem.save(newItem);

            marketPlacelist.push(newItem);
        };

        return marketPlacelist;
    };
};