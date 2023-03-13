import { Request, Response } from 'express'
import { IUser, IUserUpdate } from '../interfaces'
import createUserService from '../services/users/createUser.service'
import getAllUsersService from '../services/users/getAllUsers.service'
import softDeleteUserService from '../services/users/softDeleteUser.service'
import updateUserService from '../services/users/updateUser.service'

const createUserController = async ( req: Request, res: Response ) => {
    
    const userData: IUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const getAllUsersController = async ( req: Request, res: Response ) => {

    const allUsers = await getAllUsersService()

    return res.status(200).json(allUsers)
}

const updateUserController = async ( req: Request, res: Response ) => { 

    const userData: IUserUpdate = req.body
    const idUser: number = parseInt(req.params.id)

    const updatedUser = await updateUserService(userData, idUser)

    return res.status(200).json(updatedUser)
}

const softDeleteUserController = async ( req: Request, res: Response ) => {
    
    const idUser: number = parseInt(req.params.id)
    
    await softDeleteUserService(idUser)

    return res.status(204).send()
}

export {
    createUserController,
    getAllUsersController,
    updateUserController,
    softDeleteUserController
}