import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 400){
        super(message),
        this.statusCode = statusCode
    }
}

const handleErrors = (err:any, req: Request, resp: Response, _: NextFunction) => {
    if(err instanceof AppError){
        return resp.status(err.statusCode).json({
            message: err.message
        })
    }

    if(err instanceof ZodError){
        return resp.status(400).json({
           message: err.flatten().fieldErrors
        })
    }

    console.log(err)
    return resp.status(500).json({
        message: 'Internal server error'
    })
}

export {
    AppError,
    handleErrors,
}