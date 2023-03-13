import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { AppError } from '../../errors'

const readCategoryWithRealEstateService = async (idCategory: number): Promise<any> => {
	const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

	const findCategory = await categoryRepo.findOneBy({
		id: idCategory
	})
	
	if (!findCategory) {
		throw new AppError('Category not found', 404)
	}

	const findCategoryWithRealEstate = categoryRepo.findOne({
		where: {
			id: idCategory
		},
		relations:{
			realEstate: true
		}
	})

	return findCategoryWithRealEstate
}

export default readCategoryWithRealEstateService