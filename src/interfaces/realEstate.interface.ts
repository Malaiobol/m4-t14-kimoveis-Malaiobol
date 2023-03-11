import {
    addressResult,
    addressSchema
} from '../schemas/realEstate.schemas'
import { z } from 'zod'

type IAddressReturn = z.infer<typeof addressResult>
type IAddress = z.infer<typeof addressSchema>

export {
    IAddress,
    IAddressReturn
}