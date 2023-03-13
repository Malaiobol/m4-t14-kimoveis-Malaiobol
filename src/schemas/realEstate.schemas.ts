import { z} from 'zod'
import { 
    returnCategorySchema
} from './categories.schemas'

const addressSchema = z.object({
	street: z.string(),
	zipCode: z.string().max(8),
	number: z.string().max(7).nullish(),
	city: z.string(),
	state: z.string().max(2)
})

const addressResult = addressSchema.extend({
	id: z.number(),
})

const realEstateSchema = z.object({
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	address: addressSchema,
	categoryId: z.number(),
})

const realEstateSchemaResult = z.object({
	id: z.number(),
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	sold: z.boolean().default(false),
	address: addressResult,
	category: returnCategorySchema,
	createdAt: z.string(),
	updatedAt: z.string()
})

const realEstatesSchema = realEstateSchemaResult.array()

export {
	realEstateSchema,
	realEstateSchemaResult,
	addressResult,
    addressSchema,
	realEstatesSchema
}