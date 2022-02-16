import { getCustomRepository } from "typeorm";
import LoanRepository from "../repositories/loanRepository";
import { Loan } from "../types";


export default class CreateLoanService {
    /**
     * Receives an object of type Loan, saves and returns an Promise<Loan>. 
     */
    public async execute(loan: Loan): Promise<Loan> {
        const loanRepository = getCustomRepository(LoanRepository);        
        const newloan = loanRepository.create(loan);

        await loanRepository.save(newloan);

        return newloan;
    };
};