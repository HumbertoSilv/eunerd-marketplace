import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Loan from "./loanModel";

@Entity("investments")
export default class Investment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    totalInvestedAmountCents: number;

    @Column()
    loan_id: string;

    @ManyToOne(() => Loan)
    @JoinColumn()
    loan: Loan;

};