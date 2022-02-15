import { getCustomRepository } from "typeorm";
import AppError from "../errors/appError";
import { investmentSchema, loanSchema } from "../middlewares/schemas";
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

        try{
            for(let investment in investmentList) {
                await investmentSchema.validate(investmentList[investment]);
                await createInvestment.execute(investmentList[investment]);
            };

        }catch(err){
            throw new AppError(String(err));
        };

        for(let loan in loanList) {
            await loanSchema.validate(loanList[loan]).catch(
                (err) => {throw new AppError(String(err))}
            );
            const sql = `SELECT 
                            SUM("totalInvestedAmountCents")
                            FROM 
                                investments
                            WHERE
                                loan_id = '${loanList[loan].id}'`;

            const [ totalInvestment ] = await investmentRepo.manager.query(sql);
            if(!totalInvestment.sum) totalInvestment.sum = 0;

            const newItem = marketPlaceItem.create({
                category: loanList[loan].category,
                expiresAt: loanList[loan].expiresAt,
                totalRequestedAmount: loanList[loan].totalRequestedAmountCents,
                totalInvestmentAmount: parseInt(totalInvestment.sum)
            });

            await marketPlaceItem.save(newItem);

            marketPlacelist.push(newItem);

        };

        return marketPlacelist;
    };
};