import {  z } from 'zod'
import { returnCategorySchema } from './categories.schemas'

const addressSchema = z.object({
    street: z.string().min(5).max(45),
    zipCode: z.string().min(8).max(8),
    number: z.string().max(5).nullish(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const addressResult = addressSchema.extend({
    id: z.number()
}).omit({id: true})
   
const realEstateSchema = z.object({
    sold: z.boolean().default(false),
    value: z.number(),
    size: z.number().positive(),
    address: addressSchema,
    categoryId: z.number()
})

const realEstateSchemaResult = realEstateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    sold: z.boolean().default(false),
    address: addressResult,
    category: returnCategorySchema
}).omit({
    categoryId: true
})

const realEstatesSchema = realEstateSchemaResult.omit({category: true}).array()

export {
    addressResult,
    addressSchema,
    realEstateSchema,
    realEstateSchemaResult,
    realEstatesSchema
}
