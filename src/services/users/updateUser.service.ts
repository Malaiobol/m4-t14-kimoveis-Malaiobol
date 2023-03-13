import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { IUserReturn, IUserUpdate } from '../../interfaces'
import { returnUserSchema } from '../../schemas/users.schemas'
import { User } from '../../entities'

const updateUserService = async (UserData: IUserUpdate, UserId: number): Promise<IUserReturn> =>{

    const UsersRepository: Repository<User> = AppDataSource.getRepository(User)  

    const oldUserData = await UsersRepository.findOneBy({
        id: UserId
    })

    const newUser = UsersRepository.create({
        ...oldUserData,
        ...UserData
    })

    await UsersRepository.save(newUser)

    const updatedUser = returnUserSchema.parse(newUser)

    return updatedUser
}

export default updateUserService
