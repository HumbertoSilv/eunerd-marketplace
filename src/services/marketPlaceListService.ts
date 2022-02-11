import { getCustomRepository } from "typeorm";
import MarketPlaceItemRepository from "../repositories/marketPlaceItemRepository";
import { Investment, Loan } from "../types";

export default class CreateMarketPlaceListService {
    public async execute(loanList: Loan[], investmentList: Investment[]){
        const marketPlaceItem = getCustomRepository(MarketPlaceItemRepository);
        const marketPlacelist = [];

        for(let i = 0; i < loanList.length; i++) {
            /**
             * find => []
             * reduce in [] => N
             */      

            const newItem = marketPlaceItem.create({
                category: loanList[i].category,
                expiresAt: loanList[i].expiresAt,
                totalRequestedAmount: loanList[i].totalRequestedAmountCents,
                totalInvestmentAmount: 1
            });

            await marketPlaceItem.save(newItem);

            marketPlacelist.push(newItem);
        };
        

        return marketPlacelist;
    };
};