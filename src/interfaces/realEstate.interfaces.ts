import {
    returnAddressSchema,
    addressSchema,
    realEstateReq,
    realEstateResponseSchema,
} from '../schemas/realEstate.schemas'
import { z } from 'zod'

type IAddressReturn = z.infer<typeof returnAddressSchema>
type IAddress = z.infer<typeof addressSchema>

type IRealEstateReq = z.infer<typeof realEstateReq>
type IRealEstateReturn = z.infer<typeof realEstateResponseSchema>
type IRealEstatesList = Array<IRealEstateReturn>

export {
    IAddress,
    IAddressReturn,
    IRealEstateReq,
    IRealEstateReturn,
    IRealEstatesList
}