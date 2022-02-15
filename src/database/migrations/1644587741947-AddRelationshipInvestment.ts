import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationshipInvestment1644587741947 implements MigrationInterface {
    name = 'AddRelationshipInvestment1644587741947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investments" ADD "loanId" uuid`);
        await queryRunner.query(`ALTER TABLE "investments" ADD CONSTRAINT "FK_87e1ff51cb11fc7b2e2168e9a8b" FOREIGN KEY ("loanId") REFERENCES "loans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investments" DROP CONSTRAINT "FK_87e1ff51cb11fc7b2e2168e9a8b"`);
        await queryRunner.query(`ALTER TABLE "investments" DROP COLUMN "loanId"`);
    }

}
