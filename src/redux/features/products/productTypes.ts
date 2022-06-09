import {ErrorType, fetchStatus} from "../generalTypes";
import {IProvider} from "../provider/providerTypes";

export interface IProductInitialState {
    productsList: IProduct[]
    error: ErrorType
    status: fetchStatus
}

export interface IProduct {
    id?: string
    name: string
    description: string
    price: number
    stock: number
    max: number
    min: number
    provider: IProvider
}


