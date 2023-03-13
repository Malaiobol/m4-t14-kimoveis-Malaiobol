import {
    userSchema,
    returnUserSchema,
    returnUsersSchema,
    userUpdateSchema,
    userWithoutPassword
} from '../schemas/users.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IUsersReturn = z.infer<typeof returnUsersSchema>
type IUserUpdate = DeepPartial<IUser>
type IUserWithoutPassword = z.infer<typeof userWithoutPassword>

export {
    IUser,
    IUserReturn,
    IUsersReturn,
    IUserUpdate,
    IUserWithoutPassword
}