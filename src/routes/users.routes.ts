import { Router } from 'express'
import { createUserController, getAllUsersController, softDeleteUserController, updateUserController } from '../controllers/users.controllers'
import { 
    userSchema,
    userUpdateSchema 
} from '../schemas/users.schemas'
import ensureEmailIsValidMiddleware from '../middlewares/ensureEmailIsUnique.middleware'
import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsValidMiddleware, createUserController)
userRoutes.get('', getAllUsersController)
userRoutes.patch('/:id', ensureUserExistsMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureEmailIsValidMiddleware, updateUserController)
userRoutes.delete('/:id', ensureUserExistsMiddleware, softDeleteUserController)

export default userRoutes