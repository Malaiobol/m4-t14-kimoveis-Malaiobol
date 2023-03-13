import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { IRealEstatesList } from '../../interfaces/realEstate.interfaces'

const listRealEstateService = async (): Promise<IRealEstatesList> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateList: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    })

    return realEstateList
}

export default listRealEstateService