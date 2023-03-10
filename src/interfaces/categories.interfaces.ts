import { 
    createCategorySchema,
    returnCategoriesSchema,
    returnCategorySchema,
} from '../schemas/categories.schemas'
import { z } from 'zod'

type ICategory = z.infer<typeof createCategorySchema>
type ICategoryReturn = z.infer<typeof returnCategorySchema> 
type ICategoriesReturn = z.infer<typeof returnCategoriesSchema>

export {
    ICategory,
    ICategoriesReturn,
    ICategoryReturn
}