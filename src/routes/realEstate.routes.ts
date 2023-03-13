import { Router } from 'express'
import { realEstateSchema } from '../schemas/realEstate.schemas'
import { createRealEstateController, getAllRealEstates } from '../controllers/realEstate.controllers'

import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureDevIsAdminMiddleware from '../middlewares/ensureDevIsAdmin.middleware'

const realEstateRoutes: Router = Router()

realEstateRoutes.post('',ensureTokenIsValidMiddleware, ensureDevIsAdminMiddleware, ensureDataIsValidMiddleware(realEstateSchema), createRealEstateController)
realEstateRoutes.get('', getAllRealEstates)

export default realEstateRoutes