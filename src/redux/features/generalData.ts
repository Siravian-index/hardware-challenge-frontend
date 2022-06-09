export const ENDPOINT = "https://hardware-store-backend.herokuapp.com/v1/api/"

export enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}


export const placeErrorInState = (errorMessage: string) => {
    return `Something went wrong while fetching: ${errorMessage}`
}