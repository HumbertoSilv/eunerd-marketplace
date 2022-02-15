import { getCustomRepository } from "typeorm";
import AppError from "../errors/appError";
import InvestmentRepository from "../repositories/investmentRepository";
import LoanRepository from "../repositories/loanRepository";
import { Investment } from "../types";

export default class CreateInvestmentService {
    public async execute(investment: Investment) {
        const investmentRepository = getCustomRepository(InvestmentRepository);
        const investmentRepo = getCustomRepository(InvestmentRepository);
        const loanRepository = getCustomRepository(LoanRepository);

        const sql = `SELECT 
                            SUM("totalInvestedAmountCents")
                            FROM 
                                investments
                            WHERE
                                loan_id = '${investment.loan_id}'`;

        const [ totalInvestment ] = await investmentRepo.manager.query(sql);
        const loanValue = await loanRepository.findOne(investment.loan_id);

        if(!loanValue){
            throw "Loan_id not found.";
        };

        // if(parseInt(totalInvestment.sum) > (loanValue.totalRequestedAmountCents - parseInt(totalInvestment.sum))) {
        //     throw `Investment value greater than loan value. Balance available R$ ${loanValue.totalRequestedAmountCents - parseInt(totalInvestment.sum)}`;
        // };

        const newInvestment = investmentRepository.create(investment);

        await investmentRepository.save(newInvestment);

        return newInvestment;
    };
};