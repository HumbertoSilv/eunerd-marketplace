import { createConnection, getConnection } from "typeorm";
import Investment from "../../models/investmentModel";
import CreateInvestmentService from "../../services/investmentService";
import CreateLoanService from "../../services/loanService";
import CreateMarketPlaceListService from "../../services/marketPlaceListService";

describe("MarketPlaceList Service tests", () => {
    beforeAll(async () => {
        await createConnection();
    });

    afterAll(async () => {
        const defaultConnection = getConnection("default");
        await defaultConnection.close();
    });

    it("Should successfully create a MarketPlaceItem[] instance.", async () => {
        const marketPlaceItem = new CreateMarketPlaceListService();
        const loanService = new CreateLoanService();
        const loan: any = {
            totalRequestedAmountCents: 20000,
            category: "Y",
            expiresAt: "12-05-2022"
        };
        const newLoan = loanService.execute(loan);
        const investmentList: any = [{
			"totalInvestedAmountCents": 500,
			"loan_id": (await newLoan).id
		}];

        const marketPlace = marketPlaceItem.execute([loan], investmentList);

        expect(marketPlace).toBeInstanceOf(Promise);
    });
});