import { Router } from "express";
import CreateInvestmentController from "../controller/investmentController";

const investmentRouter = Router();

investmentRouter.post("/", (request, response) => {
    const createInvestment = new CreateInvestmentController();
    createInvestment.handle(request, response);
});

export default investmentRouter;