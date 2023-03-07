import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { returnUsersSchema } from '../../schemas/users.schemas';

const getAllUsersService = async () =>{
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)  
    
    const users = await usersRepository.find()

    const actualUsers = returnUsersSchema.parse(users)

    return actualUsers
}  

export default getAllUsersService
