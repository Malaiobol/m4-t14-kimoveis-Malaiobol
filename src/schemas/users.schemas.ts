import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().max(45).transform((pass)=>{
        return hashSync(pass, 10)
    })
})

const userUpdateSchema = userSchema.partial()

const returnUserSchema = userSchema.extend({
    id: z.number(),
    admin: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({ password:true })

const returnUsersSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    userUpdateSchema,
    returnUsersSchema
}