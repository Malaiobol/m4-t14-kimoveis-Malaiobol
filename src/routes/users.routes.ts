import { Router } from 'express'
import { createUserController, getAllUsersController, softDeleteUserController, updateUserController } from '../controllers/users.controllers'
import { 
    userSchema,
    userUpdateSchema 
} from '../schemas/users.schemas'
import ensureEmailIsValidMiddleware from '../middlewares/ensureEmailIsUnique.middleware'
import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import ensureIsActualDevMiddleware from '../middlewares/ensureIsActualDev.middleware'
import ensureDevIsAdminMiddleware from '../middlewares/ensureDevIsAdmin.middleware'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsValidMiddleware, createUserController)
userRoutes.get('', ensureDevIsAdminMiddleware, getAllUsersController)
userRoutes.patch('/:id', ensureUserExistsMiddleware, ensureIsActualDevMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureEmailIsValidMiddleware, updateUserController)
userRoutes.delete('/:id', ensureUserExistsMiddleware, softDeleteUserController)

export default userRoutes