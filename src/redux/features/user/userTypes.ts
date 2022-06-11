export interface IUser {
    email: string
    photoURL?: string
    name?: string
    accessToken: string
    emailVerified: boolean
}

export interface IUserInitialState {
    user: IUser | null
}