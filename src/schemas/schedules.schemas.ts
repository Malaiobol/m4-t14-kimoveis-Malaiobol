import { z } from 'zod'
import { returnCategorySchema } from './categories.schemas'
import { addressResult } from './realEstate.schemas'
import { returnUserSchema } from './users.schemas'

const createScheduleSchema = z.object({
	date: z.string(),
	hour: z.string(),
	realEstateId: z.number()
});

const createResponseScheduleSchema = createScheduleSchema.extend({
	id: z.number(),
	userId: z.number()
});

const readScheduleSchema = z.object({
	id: z.number(),
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	sold: z.boolean().default(false),
	createdAt: z.string(),
	updatedAt: z.string(),
	address: addressResult,
	category: returnCategorySchema,
	schedule: z.array(z.object({
		id: z.number(),
		date:z.string(),
		hour: z.string().or(z.number()),
		user: returnUserSchema
	}))
});

export {
	createScheduleSchema,
	createResponseScheduleSchema,
	readScheduleSchema
};