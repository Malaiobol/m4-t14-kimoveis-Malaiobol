import { Request, Response } from 'express'
import { IUser, IUserUpdate } from '../interfaces'
import createUserService from '../services/users/createUser.service'

const createUserController = async ( req: Request, res: Response ) => {
    
    const userData: IUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const listUsersController = async ( req: Request, res: Response ) => {

    const allUsers = ""

    return res.status(201).json(allUsers)
}

const updateUserController = async ( req: Request, res: Response ) => { 

    const userData: IUserUpdate = req.body
    const idUser: number = parseInt(req.params.id)

    // const updatedUser = await (userData, idUser)

    // return res.status(200).json(updatedUser)
}

const softDeleteUserController = async ( req: Request, res: Response ) => {
    const idUser: number = parseInt(req.params.id)
    // await (idUser)

    return res.status(204).send()
}

export {
    createUserController,
    listUsersController,
    updateUserController,
    softDeleteUserController
}