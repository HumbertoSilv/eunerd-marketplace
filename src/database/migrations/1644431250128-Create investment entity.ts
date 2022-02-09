import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInvestmentEntity1644431250128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "investment",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },{
                        name: "totalInvestedAmountCents",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },{
                        name: "loanId",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investment");
    }
}
