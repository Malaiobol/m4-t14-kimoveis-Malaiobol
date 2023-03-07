import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers'
import { 
    userSchema,
    userUpdateSchema 
} from '../schemas/users.schemas'
import ensureEmailIsValidMiddleware from '../middlewares/ensureEmailIsUnique.middleware'
import ensureDataIsValidMiddleware from '../middlewares/validateUserData.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsValidMiddleware, createUserController)
userRoutes.get('')
userRoutes.patch('/:id', ensureUserExistsMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureEmailIsValidMiddleware)
userRoutes.delete('/:id', ensureUserExistsMiddleware)

export default userRoutes