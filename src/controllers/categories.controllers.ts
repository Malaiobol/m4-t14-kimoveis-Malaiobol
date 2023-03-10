import { Request, Response } from 'express'
import { ICategory } from '../interfaces/categories.interfaces'
import createCategoryService from '../services/categories/createCategory.service'
import getAllCategoriesService from '../services/categories/getAllCategories.service'

const createCategoryController = async ( req: Request, resp: Response ) => {

    const categoryData: ICategory = req.body

    const newCategory = await createCategoryService(categoryData)

    return resp.status(201).json(newCategory)
}

const getAllCategoriesController = async ( req: Request, resp: Response ) => {

    const allCategories = await getAllCategoriesService()

    return resp.status(200).json(allCategories)
}

export {
    createCategoryController,
    getAllCategoriesController
}