import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { User } from '../entities'

const ensureUserExistsMiddleware = async (req: Request, resp: Response, next: NextFunction): Promise<void> =>{
    const UsersRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await UsersRepository.findOne({
        where:{ 
            id: parseInt(req.params.id)
        }
    })

    if(!findUser){
        throw new AppError('User not found', 404)
    }

    return next()
}

export default ensureUserExistsMiddleware