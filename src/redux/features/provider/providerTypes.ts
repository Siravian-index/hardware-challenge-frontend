import {ErrorType, fetchStatus} from "../generalTypes";

export interface IProviderInitialState {
    providerList: IProvider[]
    error: ErrorType
    status: fetchStatus
}

export interface IProvider {
    id?: string
    name: string
    card: string
}