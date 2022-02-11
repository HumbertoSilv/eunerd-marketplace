import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMarketPlaceItemEntity1644451798282 implements MigrationInterface {
    name = 'CreateMarketPlaceItemEntity1644451798282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "marketPlaceItems",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },{
                        name: "totalRequestedAmount",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },{
                        name: "totalInvestmentAmount",
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
        await queryRunner.dropTable("marketPlaceItems")
    }

}
