import { Router } from 'express'
import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'
import { realEstateSchema } from '../schemas/realEstate.schemas'
import { 
    createRealEstateController, 
    getAllRealEstates 
} from '../controllers/realEstate.controllers'
const realEstateRoutes: Router = Router()

realEstateRoutes.post('',ensureDataIsValidMiddleware(realEstateSchema), createRealEstateController)
realEstateRoutes.get('', getAllRealEstates)

export default realEstateRoutes