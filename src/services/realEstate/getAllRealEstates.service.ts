import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { IRealEstatesList } from '../../interfaces/realEstate.interfaces'
import { realEstatesSchema } from '../../schemas/realEstate.schemas'

const listRealEstateService = async (): Promise<IRealEstatesList> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateList = await realEstateRepository.find({
        relations: {
            address: true,
            category: true
        }
    })

    const realEstateListParsed: IRealEstatesList = realEstatesSchema.parse(realEstateList)

    return realEstateListParsed
}

export default listRealEstateService