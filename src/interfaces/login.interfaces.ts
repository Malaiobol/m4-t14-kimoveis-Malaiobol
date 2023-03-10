import { loginSchema } from '../schemas/login.schemas'
import { z } from 'zod'

type ILogin = z.infer<typeof loginSchema>

export {
    ILogin
}