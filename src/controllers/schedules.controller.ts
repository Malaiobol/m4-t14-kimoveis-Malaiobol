import { Request, Response } from 'express'
import { IScheduleReq } from '../interfaces/schedules.interfaces'
import readScheduleService from '../services/schedules/readSchedules.service'
import createScheduleService from  '../services/schedules/createSchedules.service'

const createScheduleController = async (req: Request, resp: Response): Promise<Response> => {

    const scheduleData: IScheduleReq = req.body

	const newSchedule = await createScheduleService(scheduleData, req)    

	return resp.status(201).json(newSchedule)

}

const getScheduleController = async (req: Request, resp: Response): Promise<Response> => {

	const id: number = parseInt(req.params.id)
	
	const scheduleRealEstate = await readScheduleService(id)

	return resp.status(200).json(scheduleRealEstate)

}

export {
	createScheduleController,
	getScheduleController
}