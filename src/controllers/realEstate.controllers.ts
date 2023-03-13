import { Request, Response } from 'express'
import { IRealEstateReq, IRealEstateReturn, IRealEstatesList } from '../interfaces/realEstate.interfaces'
import createRealEstateService from '../services/realEstate/createRealEstate.service';
import listRealEstateService from '../services/realEstate/getAllRealEstates.service';

const createRealEstateController = async (req: Request, resp: Response) => {

    const data: IRealEstateReq  = req.body;
  
    const newRealEstate: IRealEstateReturn = await createRealEstateService(data);
  
    return resp.status(201).json(newRealEstate);
};

const getAllRealEstates = async (req: Request, resp: Response) =>{

    const realEstates: IRealEstatesList = await listRealEstateService()

    return resp.status(200).json(realEstates)
}

export {
    createRealEstateController,
    getAllRealEstates
}