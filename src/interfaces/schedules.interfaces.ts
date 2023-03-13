import {
    readScheduleSchema,
    createScheduleSchema
} from '../schemas/schedules.schemas'
import { z } from 'zod'

type IScheduleReq = z.infer<typeof createScheduleSchema>
type IScheduleReturn = z.infer<typeof readScheduleSchema>
type IScheduleResp = {
    message: string
}

export {
    IScheduleReq,
    IScheduleReturn,
    IScheduleResp
}