import { getCustomRepository } from "typeorm";
import LoanRepository from "../repositories/loanRepository";
import { Loan } from "../types";

export default class CreateLoanService {
    public async execute(loan: Loan) {
        const loanRepository = getCustomRepository(LoanRepository);        
        const newloan = loanRepository.create(loan);

        await loanRepository.save(newloan);

        return newloan;
    };
};