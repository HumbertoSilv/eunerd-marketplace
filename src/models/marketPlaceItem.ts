import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../types";

@Entity("marketPlaceItems")
export default class MarketPlaceItem {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    totalRequestedAmount: number;

    @Column()
    category: Category;

    @Column()
    totalInvestmentAmount: number;

    @Column()
    expiresAt: Date;

};