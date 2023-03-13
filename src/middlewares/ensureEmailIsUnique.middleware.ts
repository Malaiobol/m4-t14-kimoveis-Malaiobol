import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../errors'

const ensureEmailIsValidMiddleware = async (req: Request, resp: Response, next:NextFunction): Promise<void> =>{
    
    const UserRepository: Repository<User> = AppDataSource.getRepository(User)
    if(req.body.email){
        const findUserEmail = await UserRepository.findOneBy({
            email: req.body.email
        })
        if(findUserEmail) throw new AppError('Email already exists', 409)
    }
    
    return next()

}

export default ensureEmailIsValidMiddleware