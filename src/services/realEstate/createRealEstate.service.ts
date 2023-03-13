import { AppDataSource } from '../../data-source'
import { Address, Category, RealEstate } from '../../entities'
import { Repository } from 'typeorm'
import { IRealEstateReq, IRealEstateReturn } from '../../interfaces/realEstate.interfaces'
import { AppError } from '../../errors'
import { realEstateSchemaResult } from '../../schemas/realEstate.schemas'

const createRealEstateService = async (realStateData: IRealEstateReq): Promise<IRealEstateReturn> =>{

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressesRepo: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const newAddress: Address = addressesRepo.create(realStateData.address)

    const actualAddress = await addressesRepo.findOneBy({
        number: String(newAddress.number)
    })

    if(actualAddress){
        throw new AppError('Address already exists', 409)
    }

    await addressesRepo.save(newAddress)

    const actualCategory: Category | null = await categoryRepo.findOneBy({
        id: realStateData.categoryId
    })

    if(!actualCategory){
        throw new AppError('Category not found', 404)
    }

    const realEstate: RealEstate = realEstateRepo.create({
        ...realStateData,
        address: newAddress,
        category: actualCategory
    })

    await realEstateRepo.save(realEstate)

    const newRealEstate: IRealEstateReturn = realEstateSchemaResult.parse(realEstate)

    return newRealEstate
}

export default createRealEstateService