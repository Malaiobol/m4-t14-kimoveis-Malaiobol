import { ICategory, ICategoryReturn } from '../../interfaces/categories.interfaces'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { Repository } from 'typeorm'

const createCategoryService = async (categoryData: ICategory): Promise<ICategoryReturn> =>{

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category = categoryRepo.create(categoryData)

    await categoryRepo.save(category)

    return category
}

export default createCategoryService