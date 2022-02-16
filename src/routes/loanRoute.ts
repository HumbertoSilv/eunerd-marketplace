import { Router } from "express";
import CreateLoanController from "../controller/loanController";
import validateSchema from "../middlewares/validateSchema";
import { loanSchema } from "../middlewares/schemas";


const loanRouter = Router();

loanRouter.post("/", validateSchema(loanSchema), (request, response) => {    
    const createLoan = new CreateLoanController();
    createLoan.handle(request, response);
});

export default loanRouter;