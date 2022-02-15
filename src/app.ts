import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import AppError from "./errors/appError";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };
    console.log(error);
    
    return response.status(500).json({
        status: "error",
        message: "Internal error."
    });
});

export default app;