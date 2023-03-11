import { z } from 'zod'

const addressSchema = z.object({
    street: z.string().min(5).max(45),
    zipCode: z.string().min(8).max(8),
    number: z.string().max(5).nullable(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const addressResult = addressSchema.extend({
    id: z.number()
})

export {
    addressResult,
    addressSchema
}
