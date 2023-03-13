import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Category } from '../entities'
import { AppError } from '../errors'

const ensureNameIsUnique = async ( req: Request, resp: Response, next: NextFunction ): Promise<void> =>{
    
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    if(req.body.name){
        const findCategoryName = await categoryRepository.findOneBy({
            name: req.body.name
        })
        if(findCategoryName) throw new AppError('Category already exists', 409)
    }
    
    return next()

}

export default ensureNameIsUnique