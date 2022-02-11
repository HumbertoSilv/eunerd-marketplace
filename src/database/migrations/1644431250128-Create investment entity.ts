import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInvestmentEntity1644431250128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "investments",
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
                        name: "loan_id",
                        type: "uuid",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investments");
    }
}
