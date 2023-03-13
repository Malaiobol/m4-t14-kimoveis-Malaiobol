import { Router } from 'express'
import { createScheduleController, getScheduleController } from '../controllers/schedules.controller'
import { createScheduleSchema } from '../schemas/schedules.schemas'
import ensureDevIsAdminMiddleware from '../middlewares/ensureDevIsAdmin.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureDataIsValidMiddleware from '../middlewares/validateData.middleware'

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(createScheduleSchema), createScheduleController)
schedulesRoutes.get('/realEstate/:id', ensureTokenIsValidMiddleware, ensureDevIsAdminMiddleware, getScheduleController)

export default schedulesRoutes