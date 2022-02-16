import { getCustomRepository } from "typeorm";
import InvestmentRepository from "../repositories/investmentRepository";
import LoanRepository from "../repositories/loanRepository";
import { Investment } from "../types";


export default class CreateInvestmentService {
    /**
     * Receives an object of type Investment, saves and returns an Promise<Investment>. 
     */
    public async execute(investment: Investment): Promise<Investment> {
        const investmentRepository = getCustomRepository(InvestmentRepository);
        const investmentRepo = getCustomRepository(InvestmentRepository);
        const loanRepository = getCustomRepository(LoanRepository);

        const sql = `SELECT SUM("totalInvestedAmountCents")
                            FROM investments
                            WHERE loan_id = '${investment.loan_id}'`;

        const [ totalInvestment ] = await investmentRepo.manager.query(sql);
        const loanValue = await loanRepository.findOne(investment.loan_id);

        if(!loanValue){throw "Loan_id not found."};

        const balanceAvailable = loanValue.totalRequestedAmountCents - parseInt(totalInvestment.sum);

        if(parseInt(totalInvestment.sum) > balanceAvailable) {
             throw `Investment value greater than loan value. Balance available R$ ${balanceAvailable}`;
        };

        const newInvestment = investmentRepository.create(investment);

        await investmentRepository.save(newInvestment);

        return newInvestment;
    };
};