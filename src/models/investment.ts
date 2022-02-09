import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("investments")
export default class Investment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    totalInvestedAmountCents: number

    @Column()
    loanId: string;

};