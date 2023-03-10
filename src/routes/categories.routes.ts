import { Router } from 'express'
import { 
    createCategoryController, 
    getAllCategoriesController 
} from '../controllers/categories.controllers'

const categoriesRoutes: Router = Router()

categoriesRoutes.post('', createCategoryController)
categoriesRoutes.get('', getAllCategoriesController)
categoriesRoutes.get('/:id/realEstate')

export default categoriesRoutes