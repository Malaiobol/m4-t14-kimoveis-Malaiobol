import { z } from 'zod'

const createCategorySchema = z.object({
    name: z.string().min(5).max(45)
})

const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

const returnCategoriesSchema = returnCategorySchema.array()

export {
    createCategorySchema,
    returnCategorySchema,
    returnCategoriesSchema,
}