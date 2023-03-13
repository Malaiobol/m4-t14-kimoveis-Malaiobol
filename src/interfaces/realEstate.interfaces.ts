import {
    addressResult,
    addressSchema,
    realEstateSchema,
    realEstateSchemaResult,
} from '../schemas/realEstate.schemas'
import { z } from 'zod'

type IAddressReturn = z.infer<typeof addressResult>
type IAddress = z.infer<typeof addressSchema>

type IRealEstateReq = z.infer<typeof realEstateSchema>
type IRealEstateReturn = z.infer<typeof realEstateSchemaResult>
type IRealEstatesList = Array<IRealEstateReturn>

export {
    IAddress,
    IAddressReturn,
    IRealEstateReq,
    IRealEstateReturn,
    IRealEstatesList
}