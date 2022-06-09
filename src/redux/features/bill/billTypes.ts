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

export interface IBill {
    id?: string
    customer: string
    date?: Date
    seller: string
    total: number
    productsSold: IProductsSold[]
}
