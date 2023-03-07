import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { returnUsersSchema } from '../../schemas/users.schemas';

const getAllUsersService = async () =>{
    const UsersRepository: Repository<User> = AppDataSource.getRepository(User)  
    
    const users = await UsersRepository.find()

    const actualUsers = returnUsersSchema.parse(users)

    return actualUsers
}  

export default getAllUsersService
