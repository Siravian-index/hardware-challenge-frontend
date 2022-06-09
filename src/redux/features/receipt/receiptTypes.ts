import {ErrorType, fetchStatus} from "../generalTypes";
import {IProvider} from "../provider/providerTypes";

export interface IReceiptInitialState {
    receiptList: IReceipt[]
    error: ErrorType
    status: fetchStatus
}

interface IReceipt {
    id?: string
    provider: IProvider
    productId: string
    amount: number
    date?: Date
}
