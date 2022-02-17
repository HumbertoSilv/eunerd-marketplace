import { createConnection, getConnection } from "typeorm";
import Investment from "../../models/investmentModel";
import CreateInvestmentService from "../../services/investmentService";
import CreateLoanService from "../../services/loanService";

describe("Investment Service tests", () => {
    beforeAll(async () => {
        await createConnection();
    });

    afterAll(async () => {
        const defaultConnection = getConnection("default");
        await defaultConnection.close();
    });

    it("Should successfully create a Investment instance.", async () => {
        const investmentService = new CreateInvestmentService();
        const loanService = new CreateLoanService();
        const loan: any = {
            totalRequestedAmountCents: 20000,
            category: "Y",
            expiresAt: "12-05-2022"
        };
        const newLoan = loanService.execute(loan);

        const investment: any = {
			"totalInvestedAmountCents": 500,
			"loan_id": (await newLoan).id
		};

        const newInvestment = await investmentService.execute(investment);

        expect(newInvestment).toBeInstanceOf(Investment);
    });
});