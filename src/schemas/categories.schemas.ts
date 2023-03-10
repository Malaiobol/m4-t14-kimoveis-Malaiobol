import { z } from 'zod'

const createCategorySchema = z.object({
    name: z.string().min(5).max(45)
})

const categoryResultSchema = createCategorySchema.extend({
    id: z.number()
})

const categoriesArraySchema = categoryResultSchema.array()

export {
    createCategorySchema,
    categoryResultSchema,
    categoriesArraySchema,
}