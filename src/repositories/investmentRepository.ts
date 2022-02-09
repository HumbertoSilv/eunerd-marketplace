import { EntityRepository, Repository } from "typeorm";
import Investment from "../models/investmentModel";

@EntityRepository(Investment)
export default class InvestmentRepository extends Repository<Investment> {};