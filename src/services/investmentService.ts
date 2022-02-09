import { getCustomRepository } from "typeorm";
import InvestmentRepository from "../repositories/investmentRepository";
import { Investment } from "../types";

export default class CreateInvestmentService {
    public async execute(investment: Investment) {
        const investmentRepository = getCustomRepository(InvestmentRepository);

        const newInvestment = investmentRepository.create(investment);

        await investmentRepository.save(newInvestment);

        return newInvestment;
    };
};