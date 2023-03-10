import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../errors'
import { ILogin } from '../../interfaces/login.interfaces'
import { Repository } from 'typeorm'


const loginService = async (loginData: ILogin): Promise<string> =>{
    
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError ('Wrong email or password', 401)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch){
        throw new AppError ('Wrong email or password', 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!,
            subject: String(user.id)
        }
    )
    return token
}