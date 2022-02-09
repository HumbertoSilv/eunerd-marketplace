import { Router } from "express";
import CreateLoanController from "../controller/loanController";

const loanRouter = Router();

loanRouter.post("/", (request, response) => {
    const createLoan = new CreateLoanController();
    createLoan.handle(request, response);
});

export default loanRouter;