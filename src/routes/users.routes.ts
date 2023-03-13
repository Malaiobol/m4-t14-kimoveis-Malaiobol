import { Router } from 'express'
import { 
    userSchema,
    userUpdateSchema 
} from '../schemas/users.schemas'
import { 
    createUserController, 
    getAllUsersController, 
    softDeleteUserController, 
    updateUserController 
} from '../controllers/users.controllers'
import ensureEmailIsValidMiddleware from '../middlewares/ensureEmailIsUnique.middleware'
import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import ensureIsActualDevMiddleware from '../middlewares/ensureIsActualDev.middleware'
import ensureDevIsAdminMiddleware from '../middlewares/ensureDevIsAdmin.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsValidMiddleware, createUserController)
userRoutes.get('', ensureTokenIsValidMiddleware, ensureDevIsAdminMiddleware, getAllUsersController)
userRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureIsActualDevMiddleware, ensureUserExistsMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureEmailIsValidMiddleware, updateUserController)
userRoutes.delete('/:id', ensureTokenIsValidMiddleware,  ensureIsActualDevMiddleware, ensureUserExistsMiddleware, softDeleteUserController)

export default userRoutes