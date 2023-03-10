import { 
    createCategorySchema,
    categoryResultSchema,
    categoriesArraySchema,
} from '../schemas/categories.schemas'
import { z } from 'zod'

type ICategory = z.infer<typeof createCategorySchema>
type ICategoryReturn = z.infer<typeof categoryResultSchema> 
type ICategoriesReturn = z.infer<typeof categoriesArraySchema>

export {
    ICategory,
    ICategoriesReturn,
    ICategoryReturn
}