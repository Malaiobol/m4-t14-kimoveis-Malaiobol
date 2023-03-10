import { Router } from 'express'
import { 
    createCategoryController, 
    getAllCategoriesController 
} from '../controllers/categories.controllers'
import ensureDevIsAdminMiddleware from '../middlewares/ensureDevIsAdmin.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureNameIsUnique from '../middlewares/verifyCategoryName.middleware'

const categoriesRoutes: Router = Router()

categoriesRoutes.post('', ensureTokenIsValidMiddleware, ensureDevIsAdminMiddleware, ensureNameIsUnique, createCategoryController)
categoriesRoutes.get('', getAllCategoriesController)
categoriesRoutes.get('/:id/realEstate')

export default categoriesRoutes