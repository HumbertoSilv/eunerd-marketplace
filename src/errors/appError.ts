
export default class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    /**
    *  Generic class to instantiate and handle errors.
    */
    constructor(message: string, statusCode: number = 400) {
        this.message = message;
        this.statusCode = statusCode;
    };
};