import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import AppError from "../errors/appError";

/**
 * Receives a schema instance and data to be validated by that schema.
 */
const validateSchema = (schema: AnySchema) => async (request: Request, response: Response, next: NextFunction) => {
    const resource = request.body;    
    try{
        await schema.validate(resource);
        next();

    }catch(err: any){
        throw new AppError(err.errors);
    };
};

export default validateSchema;