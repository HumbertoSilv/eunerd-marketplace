import { EntityRepository, Repository } from "typeorm";
import Loan from "../models/loanModel";

@EntityRepository(Loan)
export default class LoanRepository extends Repository<Loan> {};