import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import {  RealEstate, Schedule } from '../../entities'
import { AppError } from '../../errors'
import { IScheduleReturn } from '../../interfaces'

const readScheduleService = async (idRealEstate: number) => {

	const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)
	const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

	const findRealEstate = await realEstateRepo.findOne({
		where: {
			id: idRealEstate
		},
		relations: {
			address: true,
			category: true,
		}
	})

	if (!findRealEstate) {
		throw new AppError('RealEstate not found', 404)
	}

	const findSchedule = await scheduleRepo.find({
		where: {
			realEstate: {
				id: idRealEstate
			}
		},
		relations: {
			user: true
		}
	})


	const responseObject = {
		...findRealEstate,
		schedules:findSchedule
	}

	return responseObject
}

export default readScheduleService
