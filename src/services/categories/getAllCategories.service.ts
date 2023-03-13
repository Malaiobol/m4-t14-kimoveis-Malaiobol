import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { returnCategoriesSchema } from '../../schemas/categories.schemas';

const getAllCategoriesService = async () =>{
    const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)  
    
    const categories = await categoriesRepo.find()

    const actualCategories = returnCategoriesSchema.parse(categories)

    return actualCategories
}  

export default getAllCategoriesService
