import { Router } from "express";
import investmentRouter from "./investmentRoute";
import loanRouter from "./loanRoute";
import marketPlacelistRouter from "./marketPlaceList";

const router = Router();

router.use("/api/loan", loanRouter);
router.use("/api/investment", investmentRouter);
router.use("/api/marketplaceList", marketPlacelistRouter);

export default router;