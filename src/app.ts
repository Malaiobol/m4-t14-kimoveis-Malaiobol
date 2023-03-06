import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import userRoutes from './routes/users.routes'
import loginRoute from './routes/login.routes'
import categoriesRoutes from './routes/categories.routes'
import realEstateRoutes from './routes/realEstate.routes'

const app: Application = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', loginRoute)
app.use('/categories', categoriesRoutes)
app.use('/realEstate', realEstateRoutes)
app.use(handleErrors)
export default app