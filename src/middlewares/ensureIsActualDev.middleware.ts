import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'

export const ensureIsActualDevMiddleware = async (req: Request, resp: Response, next: NextFunction): Promise<void> =>{
    
    const actualUser = req.user
    const actualReq  = +req.params.id
    const actualUserId = +req.user.id

    if(actualReq !== actualUserId && actualUser.admin === false){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default ensureIsActualDevMiddleware