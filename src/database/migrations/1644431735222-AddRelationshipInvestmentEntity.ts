import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddRelationshipInvestmentEntity1644431735222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "investment",
            new TableForeignKey({
                name: "loanFK",
                columnNames: ["loanId"],
                referencedColumnNames: ["id"],
                referencedTableName: "loans",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("investment", "loanFK")
    }

}
