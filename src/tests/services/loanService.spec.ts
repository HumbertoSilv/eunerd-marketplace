import { createConnection, getConnection } from "typeorm";
import Loan from "../../models/loanModel";
import CreateLoanService from "../../services/loanService";

describe("Loan Service tests", () => {
    beforeAll(async () => {
        await createConnection();
    });

    afterAll(async () => {
        const defaultConnection = getConnection("default");
        await defaultConnection.close();
    });

    it("Should successfully create a Loan instance.", async () => {
        const loanService = new CreateLoanService();
        const loan: any = {
            totalRequestedAmountCents: 20000,
            category: "Y",
            expiresAt: "12-05-2022"
        };

        const newLoan = await loanService.execute(loan);

        expect(newLoan).toBeInstanceOf(Loan);
    });
}); 
