import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().max(45).transform((pass)=>{
        return hashSync(pass, 10)
    }),
    admin: z.boolean().default(false),
})

const userUpdateSchema = userSchema.partial().omit({ admin: true })
const userWithoutPassword = userSchema.omit({ password: true })

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullable(),
}).omit({ password:true })

const returnUsersSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    userUpdateSchema,
    returnUsersSchema,
    userWithoutPassword
}