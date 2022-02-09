import { Router } from "express";
import investmentRouter from "./investmentRoute";
import loanRouter from "./loanRoute";

const router = Router();

router.use("/api/loan", loanRouter);
router.use("/api/investment", investmentRouter);

export default router;