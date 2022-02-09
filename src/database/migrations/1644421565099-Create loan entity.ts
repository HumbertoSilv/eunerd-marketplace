import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLoanEntity1644421565099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },{
                        name: "totalRequestedAmountCents",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },{
                        name: "category",
                        type: "varchar",
                        isNullable: false
                    },{
                        name: "expiresAt",
                        type: "timestamp",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("loans");
    }

}
