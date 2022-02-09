import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../types";

@Entity("loans")
export default class Loan {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    totalRequestedAmountCents: number;
    
    @Column()
    category: Category;

    @Column()
    expiresAt: Date;

};