import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';

const getAllUsersService = async () =>{
    const UsersRepository: Repository<User> = AppDataSource.getRepository(User)  
    
    const Users = await UsersRepository.find()

    return Users
}  

export default getAllUsersService
