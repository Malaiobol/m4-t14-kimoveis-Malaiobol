import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'

const softDeleteUserService = async (userId: number): Promise<void> =>{

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const user = await usersRepository.findOne({
        where: {
            id: userId
        }
    })

    await usersRepository.softRemove(user!)
}

export default softDeleteUserService
