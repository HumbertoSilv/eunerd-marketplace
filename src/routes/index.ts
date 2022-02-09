import { Router } from "express";
import loanRouter from "./loanRoute";

const router = Router();

router.use("/api/loan", loanRouter);

export default router;