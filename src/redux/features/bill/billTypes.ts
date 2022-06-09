import {ErrorType, fetchStatus} from "../generalTypes";

export interface IBillInitialState {
    billList: IBill[]
    error: ErrorType
    status: fetchStatus
}

interface IProductsSold {
    id: string
    name: string
    price: number
    amount: number
}

interface IBill {
    id?: string
    customer: string
    seller: string
    total: number
    productsSold: IProductsSold[]
}
